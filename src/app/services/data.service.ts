import { Resource } from './../models/resource.model';
import { Task } from './../models/task.model';
import { Authpair } from './../models/authpair.model';
import { Admin } from './../models/admin.model';
import { Mentor } from './../models/mentor.model';
import { Associate } from './../models/associate.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  associates:Associate[]
  mentors:Mentor[]
  admins:Admin[]
  constructor(private http:HttpClient) { }

  public retrieveAssociates(){
    return this.http.get<Associate[]>  ("http://localhost:8080/associate/all");
  }
  public retrieveTasks(){
    return this.http.get<Task[]>  ("http://localhost:8080/task/all");
  }
  public retireveMentors(){
    return this.http.get<Mentor[]>  ("http://localhost:8080/mentor/all");
  }
  public retrieveAdmins(){
    return this.http.get<Admin[]>  ("http://localhost:8080/admin/all");
  }
  public updateTaskStatus(id,status){
    return this.http.put(`http://localhost:8080/task?id=${id}&status=${status}`,"upate task status");
  }
  public retrieveAssociateTasks(id){
    return this.http.get<Task[]>  (`http://localhost:8080/task?id=${id}`);
  }
  public retrieveAvailableMentors(){
    return this.http.get<Number[]>  ("http://localhost:8080/admin/available");
  }
  public retrieveResources(){
    return this.http.get<Resource[]>  ("http://localhost:8080/resource/all");
  }

  public getMentors(){
    console.log("data Service working1");
    this.http.get<Mentor[]>("http://localhost:8080/mentor/all").subscribe(
        (data)=>{
        this.mentors=data;
        //console.log(data);
        //console.log("ikakda")
      },
      (error)=> console.log(error,"ikkada"))
     
      console.log(this.mentors);
      return this.mentors;
  }
  public getAdmins(){
    console.log("data Service working2");
    this.http.get<any[]>("http://localhost:8080/admin/all").subscribe((data)=>{
        //this.admins.push(...data)
        //JSON.parse(data)
        //console.log(data.keys())
       // console.log(this.admins);
      },(error)=> console.log(error))
     
      console.log(this.admins);
      return this.admins;
  }
}
