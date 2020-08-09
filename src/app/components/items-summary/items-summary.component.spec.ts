import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSummaryComponent } from './items-summary.component';

describe('ItemsSummaryComponent', () => {
  let component: ItemsSummaryComponent;
  let fixture: ComponentFixture<ItemsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
