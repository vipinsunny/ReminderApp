import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events:any
  userid=""
  constructor(private ds:DataService) {
    this.userid=JSON.parse(localStorage.getItem("currentUserId") || "")
    
    this.ds.getEvent(this.userid)
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


