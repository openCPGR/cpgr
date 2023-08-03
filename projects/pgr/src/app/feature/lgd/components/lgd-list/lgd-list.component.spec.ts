import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgdListComponent } from './lgd-list.component';

describe('LgdListComponent', () => {
  let component: LgdListComponent;
  let fixture: ComponentFixture<LgdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
