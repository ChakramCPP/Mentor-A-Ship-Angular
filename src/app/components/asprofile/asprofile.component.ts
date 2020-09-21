import { Mentor } from './../../models/mentor.model';
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
  selector: 'app-asprofile',
  templateUrl: './asprofile.component.html',
  styleUrls: ['./asprofile.component.css']
})
export class AsprofileComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image:String;

  associate=new Associate();
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
    this.email=sessionStorage.getItem("email");
    this.dataService.retrieveAssociates().subscribe(
      response=>{
        try{
          console.log(response);
          this.associates=response;
          this.associates.forEach((a)=>{
              if(a.email==this.email)
              {
                this.associate=a;
              }
          })
        console.log(this.associate.aname)
        console.log(this.associate.image)
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
    console.log("associate obj",this.associate);
    // this.associate={
    //   ass_id:sessionStorage.get("asid"),
    //   aname:this.uname,
    //   email:this.email,
    //   pwd:this.password,
    //   image:this.image,
    //   mentor:this.associate.mentor 
    // }
    if(this.image==null){
      this.image=this.associate.image;
    }else{
      this.associate.image=this.image;
    }
    
    const response=this.registerService.updateAssociate({
      ass_id:this.associate.ass_id,
      aname:this.associate.aname,
      email:this.associate.email,
      pwd:this.associate.pwd,
      image:this.image,
      mentor:this.associate.mentor
    })
    console.log("method called");
      console.log(response);
      
      
  }

}
