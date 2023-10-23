import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent {
  constructor(
    private router: Router
  ){
     
  }

  chooseAvatar(id: number){
    console.log(id);
    this.router.navigate(['/questions/'+id])
  }
}
