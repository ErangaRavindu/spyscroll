import {AfterViewInit, ContentChildren, Directive, OnDestroy, QueryList} from '@angular/core';
import {ScrollSpyItemDirective} from './scroll-spy-item.directive';
import {ScrollSpyService} from '../services/scroll-spy.service';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements AfterViewInit, OnDestroy {

  @ContentChildren(ScrollSpyItemDirective, {
    descendants: true
  }) public items: QueryList<ScrollSpyItemDirective>;

  constructor(private scrollSpySvc: ScrollSpyService) {
  }

  ngAfterViewInit(): void {

    this.items.forEach((item: ScrollSpyItemDirective) => {
      console.log('this.items');
      console.log(item);
      console.log('this.items');
      // item.nativeElement.addEventListner('click', (e) => {
      //   this.scrollSpySvc.setClickMenuItem(item.id);
      //   e.preventDefault();
      // });
    });
  }

  ngOnDestroy(): void {
    this.scrollSpySvc.clear();
  }
}
