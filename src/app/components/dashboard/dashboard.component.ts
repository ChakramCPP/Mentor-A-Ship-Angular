import { Task } from './../../models/task.model';
import { Mentor } from './../../models/mentor.model';
import { Associate } from './../../models/associate.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isA=true;
  isM=true;
  isT=true;
  associates:Associate[];
  mentors:Mentor[];
  tasks:Task[];


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.retrieveAssociates().subscribe(
      resolve=>{
        this.associates=resolve;
      }
    )
    this.dataService.retireveMentors().subscribe(
      resolve=>{
        this.mentors=resolve;
      }
    )
    this.dataService.retrieveTasks().subscribe(
      resolve=>{
        this.tasks=resolve;
      }
    )

  }
  setA(){
      this.isA=false; this.isM=true;this.isT=true;
  }
  setM(){
    this.isA=true; this.isM=false;this.isT=true;
  }
  setT(){
    this.isA=true; this.isM=true;this.isT=false;
  }
}
