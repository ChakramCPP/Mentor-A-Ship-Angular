import { RegisterService } from './../../services/register.service';
import { DataService } from './../../services/data.service';
import { Resource } from './../../models/resource.model';
import { Task } from './../../models/task.model';

//import { RegisterService } from './../services/register.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AngularFireStorage, 
         AngularFireStorageReference, 
         AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  regcontroller=false;
  ref: AngularFireStorageReference;
  ftask: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  doc:String;

  tasks:Task[]
  task=new Task();
  resources:Resource[]
  resource= new Resource();
  constructor(private router:Router,
    private afStorage: AngularFireStorage,
    private dataService :DataService,
    private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
  onTaskSubmit(){
    console.log("task creation working!  ");
    //console.log("");
    
    const response=this.registerService.saveTask({
      tname:this.task.tname,
      associateid:this.task.associateid,
      //task_status:this.task.task_status,
      task_type:this.task.task_type,
      tdate:this.task.tdate
    })
    console.log("tmethod called");
      console.log(response);
    
      //this.saveTask(this.uname,this.email,this.password,this.image);
    
  }
  onResourceSubmit(){
    console.log("rmethod called");
    const response=this.registerService.saveResource({
      rname:this.resource.rname,
      tid:this.resource.tid,
      link:this.doc
    })
    
      console.log(response);
    

  }
  upload(event){
    console.log("uploading")
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.ftask= this.ref.put(event.target.files[0]);
    this.uploadProgress = this.ftask.percentageChanges();
    this.ftask.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.ref.getDownloadURL().subscribe(url => {
          console.log(url); 
          this.doc=url;
        });
      })
    ).subscribe();
  }
}
