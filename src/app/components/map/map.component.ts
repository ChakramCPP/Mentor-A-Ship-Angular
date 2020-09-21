import { RegisterService } from './../../services/register.service';
import { Mentor } from './../../models/mentor.model';
import { Associate } from './../../models/associate.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  associates= new Array<Associate>();
  mentors= new Array<Mentor>();
  mids:Number[];
  selectedMentor:Number;
  selectedAssociate:number;
  constructor(private dataService:DataService,
              private registerService:RegisterService) { }

  ngOnInit(): void {
    this.dataService.retireveMentors().subscribe(
      response=>{
        this.mentors=response;
        console.log(response,"mentors")
      },
      error=>{
          console.log(error)
      }
    )
    this.dataService.retrieveAssociates().subscribe(
      response=>{
        this.associates=response;
        console.log(response,"associates")
      },
      error=>{
          console.log(error)
      }
    )
    
  }
  mapMentors(){
    console.log("mapping...",this.selectedAssociate,this.selectedMentor)
    this.dataService.retrieveAvailableMentors().subscribe(
      response=>{
        this.mids=response
        console.log(this.mids,"available")
        console.log(this.mids.some(x => x === this.selectedMentor))
        if(!this.mids.some(x => x === this.selectedMentor)){
          
          this.registerService.mapMentors(this.selectedMentor,this.selectedAssociate)
        }else{
          alert("limit reached for:"+this.selectedMentor)
        }
      }
    )
    
  }

}
