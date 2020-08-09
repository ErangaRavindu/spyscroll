import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLoaderComponent } from './empty-loader.component';

describe('EmptyLoaderComponent', () => {
  let component: EmptyLoaderComponent;
  let fixture: ComponentFixture<EmptyLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
