import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isModalOpen = true;

  ngOnInit() {
    // You can open the modal on page load by uncommenting the following line.
    // this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
