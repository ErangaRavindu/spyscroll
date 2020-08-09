import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTileComponent } from './place-tile.component';

describe('PlaceTileComponent', () => {
  let component: PlaceTileComponent;
  let fixture: ComponentFixture<PlaceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
