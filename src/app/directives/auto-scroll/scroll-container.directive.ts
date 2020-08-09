import {Directive, ElementRef, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AutoScrollService} from '../../services/auto-scroll.service';
import {Subscription} from 'rxjs';

/**
 * Created by hareen
 */
@Directive({
  selector: '[appScrollContainer]'
})

export class ScrollContainerDirective implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(private elementRef: ElementRef, private autoScrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.autoScrollService.currentSection.subscribe(currentSection => {
      if (currentSection && this.autoScrollService.isTabClicked) {
        this.autoScrollService.scrollTo(
          document.getElementById(currentSection.id),
          this.elementRef.nativeElement,
          () => {
            setTimeout(() => {
              this.autoScrollService.isTabClicked = false;
            }, 20);

          }
        );
      }
    }));
  }

  @HostListener('scroll')
  onScrolling() {
    this.autoScrollService.sections.getValue().forEach(section => {
      if (section && !this.autoScrollService.isTabClicked && !section.hide) {
        const element = document.getElementById(section.id);
        if (element) {
          const target: any = event.target || event.srcElement;

          const sectionTop = element.offsetTop;
          const sectionBottom = element.offsetTop + element.offsetHeight;
          const scrollTop = target.scrollTop + this.getStickyHeight();

          if (scrollTop >= sectionTop && scrollTop <= sectionBottom) {
            this.autoScrollService.currentSection.next(section);
          }
        }
      }
    });
  }

  /**
   * Returns sum of heights of all sticky sections
   * @returns {number}
   */
  getStickyHeight() {
    let height = 0;
    this.autoScrollService.stickyHeights.forEach((value, key) => {
      height += value;
    });
    return height;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
