import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name=""
userid=""
pswd=""

registerForm=this.fb.group({
name:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
userid:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm)

    
    if(this.registerForm.valid){
    var name=this.registerForm.value.name
    var userid=this.registerForm.value.userid
    var pswd=this.registerForm.value.pswd
    //asynchronous
    this.ds.register(name, userid, pswd)
    .subscribe((result:any) =>{
      if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
    
    },
    (result)=>{
      alert(result.error.message)
    
    }
    )
  

  }
    else{
      alert("Invalid Form")
    }
  }
}

