import { Mentor } from './../../models/mentor.model';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../../services/register.service';
import { DataService } from './../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Associate } from './../../models/associate.model';
import { catchError, finalize } from 'rxjs/operators';
import { AngularFireStorage, 
  AngularFireStorageReference, 
  AngularFireUploadTask } from 'angularfire2/storage';

  import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mprofile',
  templateUrl: './mprofile.component.html',
  styleUrls: ['./mprofile.component.css']
})
export class MprofileComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image:String;

  associate=new Associate();
  mentor=new Mentor();
  user:String;
  id:number;
  isEditing=false;
  associates:Associate[];
  mentors:Mentor[];
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
        this.dataService.retireveMentors().subscribe(
          response=>{
            try{
              console.log(response);
              this.mentors=response;
              this.mentors.forEach((m)=>{
                  if(m.email==this.email)
                  {
                    this.mentor=m;
                  }
              })
            console.log(this.mentor.mname)
            console.log(this.mentor.photograph)
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
          this.saveMentor();
         this.isEditing=false;
        
      }
      saveMentor(){
        console.log("mentor obj",this.mentor);
        // this.associate={
        //   ass_id:sessionStorage.get("asid"),
        //   aname:this.uname,
        //   email:this.email,
        //   pwd:this.password,
        //   image:this.image,
        //   mentor:this.associate.mentor 
        // }
        if(this.image==null){
          this.image=this.mentor.photograph;
        }else{
          this.mentor.photograph=String(this.image);
        }
        
        const response=this.registerService.updateMentor({
          mentor_id:this.mentor.mentor_id,
          mname:this.mentor.mname,
          email:this.mentor.email,
          pwd:this.mentor.pwd,
          photograph:this.image,
          role:this.mentor.role,
          aoi:this.mentor.aoi,
          expertise:this.mentor.expertise,
          organization:this.mentor.organization
        })
        console.log("method called");
          console.log(response);
          
          
      }

}
