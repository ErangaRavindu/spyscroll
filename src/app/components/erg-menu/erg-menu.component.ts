import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-erg-menu',
  templateUrl: './erg-menu.component.html',
  styleUrls: ['./erg-menu.component.scss']
})
export class ErgMenuComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErgMenuComponent>
  ) { }

  ngOnInit(): void {
  }

}
