import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events:any
  eventname:""
  constructor(private ds:DataService) {
    this.eventname=JSON.parse(localStorage.getItem("currentEventName") || "")
    
    this.ds.getEvent(this.eventname)
    .subscribe((result:any)=>{
      console.log(result);
      if(result){
      this.events=result.event
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    
    )
    
   }

  ngOnInit(): void {
  }

}


