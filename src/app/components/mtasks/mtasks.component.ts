import { Associate } from './../../models/associate.model';
import { Index } from './../../models/index.model';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-mtasks',
  templateUrl: './mtasks.component.html',
  styleUrls: ['./mtasks.component.css']
})
export class MtasksComponent implements OnInit {

  user:String;
  associates=new Array<Associate>();
  ass:Associate
  tasks= new Array<Task>();
  ptasks:Task[];
  task= Task;
  status_update:number;
  asid:number;
  myid:number;
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {

  //this.user=sessionStorage.getItem("email");
  //this.asid=Number(sessionStorage.getItem("asid"));
  //console.log(this.user)
  this.myid=Number(sessionStorage.getItem("id"))
    this.dataService.retrieveAssociates().subscribe(
      response=>{
        //this.associates=response;
        console.log(response,"myassociates");
        response.forEach((data)=>{
          if(data.mentor==this.myid){
            this.ass=data
            this.associates.push(this.ass)
            this.getMyTasks(data.ass_id)
          }
        })
        console.log(this.associates,"filtered");
      }
  )
     
  }
 public getMyTasks(id){
  this.dataService.retrieveAssociateTasks(id).subscribe(
    response=>{
          this.ptasks=response;
          this.ptasks.forEach((data)=>{
            this.tasks.push(data)
          })
       },
       error=>{
         console.log(error)
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
