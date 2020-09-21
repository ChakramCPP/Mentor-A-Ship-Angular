import { Associate } from './../models/associate.model';
import { RegisterService } from './../services/register.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AngularFireStorage, 
         AngularFireStorageReference, 
         AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  regcontroller=false;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image:String;

 uname:string;
 email:string;
 org:string;
 role:string;
 password:string;
 aoi:string;
 expertise:string;
 cat:String;
//  uploader: FileUploader = new FileUploader(
//    { url: "", removeAfterUpload: false, autoUpload: true });

  constructor(private router:Router,
              private afStorage: AngularFireStorage,
              private registerService :RegisterService) { }

  ngOnInit(): void {
  }
  change2Associate(){
    this.cat='associate';
  }
  change2Mentor(){
    this.cat='mentor';
  }
  onSubmit(){
    console.log("registration working!  ");
    if(this.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)){
      
      if(this.cat=="associate"){
        this.saveAssociate(this.uname,this.email,this.password,this.image);
        this.router.navigate(['/login']);
      }
      else{
        this.saveMentor(this.uname,this.email,this.org,this.role,this.password,this.aoi,this.expertise,this.image)
        this.router.navigate(['/login']);
      }
      
    }
    else{
      alert("password should contian atleast one number and special character,Min-Length:8")
    }
   
  }
  upload(event) {
    console.log("uploading")
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task= this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.ref.getDownloadURL().subscribe(url => {
          console.log(url); 
          this.image=url;
        });
      })
    ).subscribe();
  }

  saveAssociate(n,e,p,i){
    console.log("associate");
    
    const response=this.registerService.saveAssociate({
      aname:n,
      email:e,
      pwd:p,
      image:i
    })
    console.log("method called");
      console.log(response);
      
      
  }
  saveMentor(n,e,o,r,p,a,expertise,i){
    console.log("mentor");
    const response=this.registerService.saveMentor({
      mname:n,
      email:e,
      organization:o,
      role:r,
      aoi:a,
      expertise:expertise,
      photograph:i,
      pwd:p
    })
    console.log("method called");
      console.log(response);
  }

}
