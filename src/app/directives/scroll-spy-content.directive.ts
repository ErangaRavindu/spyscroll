import {ChangeDetectorRef, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appScrollSpyContent]'
})
export class ScrollSpyContentDirective {

  @Input() public id: string;

  public nativeElement: any;

  constructor(private cdRef: ChangeDetectorRef, private el: ElementRef) {
    this.nativeElement = el.nativeElement;
  }

  public detectChanges(): void {
    this.cdRef.detectChanges();
  }
}
