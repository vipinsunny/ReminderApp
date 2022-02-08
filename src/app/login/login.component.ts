import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userid = ""
  pswd = ""


  loginForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    pswd: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
  })

  // dependency injection
  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
 

  login() {

    var userid = this.loginForm.value.userid
    var password = this.loginForm.value.pswd
    if (this.loginForm.valid) {


     
      //asynchronous
      this.ds.login(userid, password)
      .subscribe((result:any) =>{
        if(result){
        alert(result.message)
        localStorage.setItem("currentUserId", JSON.stringify(result.currentUserId))
        localStorage.setItem("currentName", JSON.stringify(result.currentName))

        localStorage.setItem("token", JSON.stringify(result.token))
        this.router.navigateByUrl("dashboard")
      }
      
      },
      (result)=>{
        alert(result.error.message)
      
      }
      )
    } else {
      alert("invalid form")
    }

}
}
