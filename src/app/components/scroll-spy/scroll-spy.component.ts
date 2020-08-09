import {Component, ContentChildren, OnDestroy, OnInit, QueryList, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {ScrollSpyContentDirective} from '../../directives/scroll-spy-content.directive';
import {Subject} from 'rxjs';
import {ScrollSpyService} from '../../services/scroll-spy.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls: ['./scroll-spy.component.scss']
})
export class ScrollSpyComponent implements OnInit, OnDestroy {

  @ViewChild('partnerDetailsScrollBar', {static: false}) scrollbar?;
  PerfectScrollbarComponent;

  @ContentChildren(ScrollSpyContentDirective, {descendants: true}) sectoins: QueryList<ScrollSpyContentDirective>;
  private scrollSpeed: number;
  private isClick: boolean;
  private timeOut: 200;
  private ngUnSubscription = new Subject();
  config = {
    suppressScrollX: false
  };

  constructor(private  scrollSpySvc: ScrollSpyService) {
  }

  ngOnInit(): void {
    this.isClick = false;
    this.scrollSpeed = 50;
    this.ItemClickEvent();
  }

  private ItemClickEvent() {
    this.scrollSpySvc.getClickMenuItem()
      .pipe(takeUntil(this.ngUnSubscription))
      .subscribe((item: string) => {
        if (item) {
          this.isClick = true;
          if (this.scrollbar) {
            this.scrollbar.directiveRef.scrollToElement('#${item}', 0, this.scrollSpeed);
          }
          setTimeout(() => {
            this.isClick = false;
          }, this.timeOut);
        }
      });
  }

  onScroll() {
    if (this.isClick) {
      return;
    }
    const lastScrollTop = this.scrollbar.directiveRef.geometry().y;
    const scrollBarInstance = this.scrollbar.directiveRef.ps();
    const position = this.scrollbar.directiveRef.position();
    const scrollHeight = lastScrollTop + scrollBarInstance.scrollbarYTop;
    const sectionList = this.sectoins.toArray();
    if (sectionList.length > 0) {
      for (const [index, section] of sectionList.entries()) {
        if (position.y === 'end') {
          this.scrollSpySvc.setActiveMenuItem(sectionList[sectionList.length - 1].id);
          break;
        } else if (this.sectoins.length === index + 1 && section.nativeElement.offsetTop <= scrollHeight ||
          (section.nativeElement.offsetTop <= scrollHeight &&
            ((section.nativeElement.offsetTop + section.nativeElement.offsetHeight) > scrollHeight ||
              sectionList[index + 1].nativeElement.offsetTop > scrollHeight))) {
          this.scrollSpySvc.setActiveMenuItem(section.id);
          break;
        }
      }
    }
  }

  ngOnDestroy() {
    this.ngUnSubscription.next(true);
    this.ngUnSubscription.complete();
  }

}
