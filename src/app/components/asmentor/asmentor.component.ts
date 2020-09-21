import { DataService } from './../../services/data.service';
import { Mentor } from './../../models/mentor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmentor',
  templateUrl: './asmentor.component.html',
  styleUrls: ['./asmentor.component.css']
})
export class AsmentorComponent implements OnInit {

  mentor:Mentor;
  mentors:Mentor[];
  user:String;
  id:number;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem("email");
    this.id=Number(sessionStorage.getItem("id"));
  console.log(this.user)
  this.dataService.retireveMentors().subscribe(
    response=>{
      this.mentors=response;
      console.log(this.mentors)
      this.mentors.forEach(m=>{
          if(m.mentor_id==this.id){
            this.mentor=m;
            console.log(this.mentor.mname)
          }
      })
      
       },
       error=>{
         console.log(error)
       }
      )
  }

}
