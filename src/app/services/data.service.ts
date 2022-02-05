import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUserId:any;
  currentName:any


  users: any = {
    1000: {
      name: "Vipin",
      userid: 1000,
      password: "1000",
      event:[]
    },
    1001: {
      name: "Kevin",
      userid: 1001,
      password: "1001",
      event:[]
    },
    1002: {
      name: "Mini",
      userid: 1002,
      password: "1002",
      event:[]
    }

  }

  constructor(private http: HttpClient) { 
  }

  register(name: any, userid: any, password: any) {
//////////////////////////////////////////////////////////////////////////////////
    const data={
      
      name,
      userid,
      password
    }
  

    //asynchronous event
    return this.http.post('http://localhost:4000/register',data)


    
  } 

  login(userid: any, password: any) {
    
    const data={
      userid,
      password
    }


    return this.http.post('http://localhost:4000/login',data)


    
  }

  event(eventname: any, eventdate: any) {

    const data={
      eventname,
      eventdate
    }
    return this.http.post('http://localhost:4000/event',data,this.getOptions())
  }


    getOptions(){
      const token=JSON.parse(localStorage.getItem("token")||"")

      let headers=new HttpHeaders()
      if(token){
        headers=headers.append('x-access-token',token)
        options.headers=headers
      }

      return options;
    }


    





    


  // withdraw(acno: any, password: any, amt: any) {
  //   const data={
  //     acno,
  //     password,
  //     amt
  //   }
  //   return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

  //       }
  



  

  

  


getEvent(eventname:any){
  const data={}

  //////////asynchronous

  return this.http.post('http://localhost:4000/getEvent/'+eventname,data,this.getOptions())

}

// delete(acno:any){
 

//   //////////asynchronous

//   return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())

// }





}
