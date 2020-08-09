import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
