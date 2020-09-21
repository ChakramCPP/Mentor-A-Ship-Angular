import { ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})


export class AssociateComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  registerView=true
  user:String;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.user = 
      console.log(params);
    });
  }

}
