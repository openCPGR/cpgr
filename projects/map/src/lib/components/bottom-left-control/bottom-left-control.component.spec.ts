import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftControlComponent } from './bottom-left-control.component';

describe('BottomLeftControlComponent', () => {
  let component: BottomLeftControlComponent;
  let fixture: ComponentFixture<BottomLeftControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomLeftControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomLeftControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
