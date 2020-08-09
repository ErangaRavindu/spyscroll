import {
  AfterViewInit,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Section } from '../../services/section';
import { AutoScrollService } from '../../services/auto-scroll.service';
import { Subscription } from 'rxjs';

/**
 * Created by hareen
 */

@Directive({
  selector: '[appScrollSection]'
})
export class ScrollSectionDirective implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  @Input()
  set tcScrollSectionId(id: string) {
    if (id && id !== '') {
      this.id = id;
      this.section.id = this.id;
    }
  }

  @Input()
  set tcScrollSectionTitle(title: string) {
    this.title = title;
    this.section.title = this.title;
  }

  @Input()
  set tcScrollSectionError(error: boolean) {
    this.section.error = error;
  }

  /**
   * Scroll section directive renders the containing view according to the condition
   * Acts as *ngIf directive
   * @param {boolean} condition
   */
  @Input()
  set tcScrollSection(condition: boolean) {
    if (condition && !this.hasView) {
      this.embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
      this.section.hide = false;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
      this.embeddedView = null;
      this.section.hide = true;
    }
  }

  private id;
  private title;
  private embeddedView;

  public section: Section;

  private subscription: Subscription = new Subscription();
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private autoScrollService: AutoScrollService
  ) {
    this.section = new Section();
    this.section.hide = true;
  }

  ngOnInit(): void {
    this.initParameters();
  }

  ngAfterViewInit(): void {
    this.autoScrollService.sections.getValue().push(this.section);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setID();
  }

  ngOnDestroy(): void {
    this.autoScrollService.sections.next([]);
    this.subscription.unsubscribe();
  }

  private initParameters() {
    if (!this.id) {
      this.id = this.templateRef.elementRef.nativeElement.id;
    }
    if (!this.title) {
      this.title = this.id;
    }
  }

  private setID() {
    if (this.hasView && this.embeddedView) {
      if (!this.embeddedView.rootNodes[0].id && this.id) {
        this.embeddedView.rootNodes[0].setAttribute('id', this.id);
      }
    }
  }
}
