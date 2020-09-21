import { Admin } from './../../models/admin.model';
import { RegisterService } from './../../services/register.service';
import { DataService } from './../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Associate } from './../../models/associate.model';
import { Component, OnInit } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';

import { AngularFireStorage, 
  AngularFireStorageReference, 
  AngularFireUploadTask } from 'angularfire2/storage';

  import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-adprofile',
  templateUrl: './adprofile.component.html',
  styleUrls: ['./adprofile.component.css']
})
export class AdprofileComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image:String;

  admins:Admin[];
  admin=new Admin();
  user:String;
  id:number;
  isEditing=false;
  associates:Associate[];
  email:String;

  uname:string;
  myemail:string;
  org:string;
  role:string;
  password:string;
  aoi:string;
  expertise:string;
  cat:String;

  constructor(private route:ActivatedRoute,
              private dataService:DataService,
              private afStorage: AngularFireStorage,
              private registerService :RegisterService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem("emaild");
    this.dataService.retrieveAdmins().subscribe(
      response=>{
        try{
          console.log(response);
          this.admins=response;
          this.admins.forEach((a)=>{
              if(a.ademail==this.email)
              {
                this.admin=a;
              }
          })
        console.log(this.admin.adname)
        console.log(this.admin.adphotograph)
        }
        catch{
          console.log("Error : null could be the reason ");
        }
      }
  )
   
    
  }
  editProfile(){
    this.isEditing=true;
    
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
  onSubmit(){
    console.log("Editing profile working!  ");
      this.saveAssociate();
     this.isEditing=false;
    
  }
  saveAssociate(){
    console.log("admin obj",this.admin);
    if(this.image==null){
      this.image=this.admin.adphotograph;
    }else{
      this.admin.adphotograph=this.image;
    }
    
    const response=this.registerService.updateAdmin({
      adid:this.admin.adid,
      adname:this.admin.adname,
      ademail:this.admin.ademail,
      adpwd:this.admin.adpwd,
      adphotograph:this.image
    })
    console.log("method called");
      console.log(response);
      
      
  }
}
