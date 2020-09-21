import { Associate } from './../models/associate.model';

import { DataService } from './../services/data.service';
import { Authpair } from './../models/authpair.model';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=""
  password = ""
  submitted= true
  associates:Associate[]
  errormsg=""

  constructor(private authService:AuthService,private router:Router) { }
  
  
  //private authPair:Authpair
  private authPair=new Authpair(false,"associate");

  ngOnInit(): void {
    //email="hare Krishna"
    this.email="cpp@cpp.com";
    this.password="cppcppcpp";
    //this.errormsg=""
    //this.authPair=new Authpair(false,"associate");
    // if(this.authPair.isAuthenticated=true){
    //   this.router.navigate(['/associate'])
    // }
    // if(this.authPair.isAuthenticated=false){
    //   this.router.navigate(['/login'])
    // }
   

  }

  newLogin(){
    console.log(this.email,this.password)
    
  }
  onSubmit(){
    //this.submitted=true;
    console.log("yes");
    this.validateUser()
    
  }
    validateUser(){

      this.authService.isAssociate(this.email,this.password).then((data)=>{
        this.authPair=new Authpair(data.isAuthenticated,data.type);
        console.log('yeah')
        console.log(this.authPair);
        if(this.authPair.isAuthenticated){
           
          console.log("logged In");
          
          const type=this.authPair.type;
          sessionStorage.setItem("email",this.email);
          //alert("Login succesfull")
          this.router.navigate(['associate',this.email])
          
        }
      }).catch((error)=>{


        this.authService.isMentor(this.email,this.password).then((data)=>{
          this.authPair=new Authpair(data.isAuthenticated,data.type);
          console.log('yeah')
          console.log(this.authPair);
          if(this.authPair.isAuthenticated){
             
            console.log("logged In");
            
            const type=this.authPair.type;
            sessionStorage.setItem("email",this.email);
            //alert("Login succesfull")
            this.router.navigate(['mentor',this.email])
            
          }
        }).catch((error)=>{


          console.log(error,"hi")
          if(this.email=="chakri@gmail.com"&&this.password=="harekrishna"){
        
            sessionStorage.setItem("authenticated","true");
              sessionStorage.setItem("type","admin");
              sessionStorage.setItem("id",null);
              sessionStorage.setItem("asid",null);
              sessionStorage.setItem("emaild",this.email);
            this.router.navigate(['admin',this.email]);
            alert("login succesful")
          }else{

          alert("Invalid login");
          console.log("login failed")
          this.errormsg="Login Failed!"
          this.submitted=false;

          }
        })

      });
    }
}
