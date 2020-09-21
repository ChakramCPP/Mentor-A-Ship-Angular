import { Resource } from './../../models/resource.model';
import { Index } from './../../models/index.model';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  user:String;
  tasks:Task[];
  pres:Resource[];
  resources= new Array<Resource>();
  status_update:number;
  asid:number;
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {

  this.user=sessionStorage.getItem("email");
  this.asid=Number(sessionStorage.getItem("asid"));
  console.log(this.user)
  this.dataService.retrieveAssociateTasks(this.asid).subscribe(
    response=>{
      this.tasks=response;
      console.log(this.tasks,"associate tasks");
       },
       error=>{
         console.log(error)
       }
      )
   this.dataService.retrieveResources().subscribe(
     response=>{
       this.pres=response
       this.tasks.forEach((t)=>{
        this.pres.forEach((r)=>{
          if(r.tid==t.tid){
            this.resources.push(r);
          }
         })
      })
       
     }
   )
     
  }

 
  
  update_status(i,id){
    //this.tasks[i].task_status=this.status_update;
    console.log(this.tasks[i].task_status,i,id);
    this.dataService.updateTaskStatus(id,this.tasks[i].task_status).subscribe(
      response=>{
        
        console.log(response);
      },
      error=>{
        alert("status updated");
      }
    )
    
  }


}
