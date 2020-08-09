import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgMenuComponent } from './erg-menu.component';

describe('ErgMenuComponent', () => {
  let component: ErgMenuComponent;
  let fixture: ComponentFixture<ErgMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErgMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
