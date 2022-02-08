import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventname = ""
  eventdate = ""
 
  

  eventname1= ""
  eventdate1=""

 
  


  eventForm = this.fb.group({
   eventname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  eventdate: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-./]*')]]
  
  })


  
user:any
userid:any


  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { 
  if(localStorage.getItem("currentName")){
    this.user=JSON.parse(localStorage.getItem("currentName") || "")
   }
  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert(("Please Log In"))
      this.router.navigateByUrl("")
    }
  }
  
  logout(){
    localStorage.removeItem("currentEventName")
    localStorage.removeItem("currentEventDate")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

  event() {
    
    var eventname = this.eventForm.value.eventname
    var eventdate = this.eventForm.value.eventdate
    var userid=JSON.parse( localStorage.getItem("currentUserId")||"")

    if (this.eventForm.valid) {
      this.ds.event(eventname, eventdate, userid)
    
      .subscribe((result:any) =>{
        if(result){
        alert(result.message)
        
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

  
//    deleteFromParent(){
// this.accno=JSON.parse(localStorage.getItem("currentAcno") || "")

//    }
//    delete(event:any){
//      this.ds.delete(event)
//      .subscribe((result:any)=>{
//        if(result){
//         alert(result.message)
//         this.router.navigateByUrl('')
//        }
//      },
//      (result)=>{
//        alert(result.error.message)
//      }
//      )
//      }

//      cancel(){
//        this.userid=""
//      }
   }





