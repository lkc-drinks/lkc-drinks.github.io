import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  avatarChosen: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(){
    this.avatarChosen=this.route.snapshot.params['id'];
    this.avatarChosen=this.route.snapshot.params['avatarChosen'];
  }
  findPic(){
    return "/assets/"+this.avatarChosen+".jpg"; 
  }
}
