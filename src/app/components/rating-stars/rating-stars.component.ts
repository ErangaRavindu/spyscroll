import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RatingStarsComponent implements OnInit {

  @Input('rating') public rating = 3;
  @Input('starCount') public starCount = 5;
  @Input('color') public color = 'warn';
  @Output() public ratingUpdated = new EventEmitter();

  // public snackBarDuration = 2000;
  public ratingArr = [];

  constructor() {
  }


  ngOnInit() {
    console.log('a' + this.starCount);
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    console.log(rating);
    // this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
    //   duration: this.snackBarDuration
    // });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}

export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
