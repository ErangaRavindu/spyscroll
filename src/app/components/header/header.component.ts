import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../pages/user/login/login.component';
import {RegisterComponent} from '../../pages/user/register/register.component';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerClass: string;

  constructor(public dialog: MatDialog, private headerData: HeaderService) {
  }


  signin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  signup(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      panelClass: ['modal--small', 'user-modal'],
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
    this.headerData.currentHeader.subscribe(headerClass => this.headerClass = headerClass);
  }

}

