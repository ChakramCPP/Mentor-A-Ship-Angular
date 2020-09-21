import { Associate } from './../../models/associate.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-myassociates',
  templateUrl: './myassociates.component.html',
  styleUrls: ['./myassociates.component.css']
})
export class MyassociatesComponent implements OnInit {
  associates=new Array<Associate>();
  ass:Associate
  myid:number;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.myid=Number(sessionStorage.getItem("id"))
    this.dataService.retrieveAssociates().subscribe(
      response=>{
        //this.associates=response;
        console.log(response,"myassociates");
        response.forEach((data)=>{
          if(data.mentor==this.myid){
            this.ass=data
            this.associates.push(this.ass)
          }
        })
        console.log(this.associates,"filtered");
      }
  )

  }

}
