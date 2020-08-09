import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { StarRatingColor } from './components/rating-stars/rating-stars.component';
import {HeaderService} from './components/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity : 0})),
        transition(':enter',[ animate(300)]),
        transition(':leave',[ animate(500)]),
      ]
    )]
  })
export class AppComponent {
  rating = 3;
  starCount = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  constructor(@Inject(DOCUMENT) document) { }
  title = 'hangOut';
  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}
