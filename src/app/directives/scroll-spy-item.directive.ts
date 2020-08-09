import {ChangeDetectorRef, Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appScrollSpyItem]'
})
export class ScrollSpyItemDirective {
  @HostBinding('class.active')
  public active = false;

  @HostBinding('class.d-none')
  public showItem = false;

  @Input() public id: string;

  public nativeElement: any;

  constructor(private  cdRef: ChangeDetectorRef, private ef: ElementRef) {
    this.nativeElement = ef.nativeElement;
  }

  public detectChanges(): void {
    this.cdRef.detectChanges();
  }

}
