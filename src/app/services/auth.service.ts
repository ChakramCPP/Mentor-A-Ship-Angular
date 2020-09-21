import { DataService } from './data.service';
import { Authpair } from './../models/authpair.model';
import { Admin } from './../models/admin.model';
import { Mentor } from './../models/mentor.model';
import { Associate } from './../models/associate.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http:HttpClient
  
  mentors:Mentor[]
  admins:Admin[]
  associates:Associate[]
  private authPair:Authpair
  constructor(private dataService:DataService) { }

  public isAssociate(e,p):Promise<Authpair>{
      return new Promise(
        (resolve, reject) =>{
          //console.log("int the beginning")
      //console.log(this.associates)
      this.dataService.retrieveAssociates().subscribe(
          response=>{
            this.associates=response;
            //console.log(this.associates,"bad");
            this.associates.forEach((associate)=>{
              //console.log("for each");
             // console.log(e,p);
              //console.log(associate.email,associate.pwd);
              if(associate.email==e && associate.pwd ==p){
                
                
                // this.authPair.isAuthenticated=true;
                // this.authPair.type="associate";
                sessionStorage.setItem("authenticated","true");
                sessionStorage.setItem("type","associate");
                sessionStorage.setItem("id",String(associate.mentor));
                sessionStorage.setItem("asid",String(associate.ass_id));
                resolve(new Authpair(true,"associate")) ;
              }
            })
            reject(new Authpair(false,"associate"))
          }
      )
       }
      )
      
      //return this.authPair;
  }
  public isMentor(e,p):Promise<Authpair>{
    return new Promise(
      (resolve, reject) =>{
        //console.log("int the beginning")
    //console.log(this.associates)
    this.dataService.retireveMentors().subscribe(
        response=>{
          this.mentors=response;
          //console.log(this.associates,"bad");
          this.mentors.forEach((mentor)=>{
            //console.log("for each");
           // console.log(e,p);
            //console.log(associate.email,associate.pwd);
            if(mentor.email==e && mentor.pwd ==p){
              
              
              // this.authPair.isAuthenticated=true;
              // this.authPair.type="associate";
              sessionStorage.setItem("authenticated","true");
              sessionStorage.setItem("type","mentor");
              sessionStorage.setItem("id",String(mentor.mentor_id));
              sessionStorage.setItem("asid",null);
              resolve(new Authpair(true,"mentor")) ;
            }
          })
          reject(new Authpair(false,"mentor"))
        }
    )
     }
    )
    
    //return this.authPair;
}
}
