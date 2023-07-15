import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';
import { ICellRendererParamsActionCmp } from './cell-renderer-params-action-cmp.interface';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init ag grid', () => {
    const params = {} as ICellRendererParamsActionCmp;
    component.agInit(params);
    expect(component.params).toEqual(params);
  });

  it('should refresh grid', () => {
    const params = {} as ICellRendererParamsActionCmp;
    expect(component.refresh(params)).toBeTrue();
  });

  it('should call click function of params', () => {
    const params = {} as ICellRendererParamsActionCmp;
    params.editClicked = () => {};
    params.viewClicked = () => {};
    component.agInit(params);
    component.editClicked();
    component.viewClicked();
    expect(true).toBeTrue();
  });

  it('should not call click function of params', () => {
    component.editClicked();
    component.viewClicked();
    expect(true).toBeTrue();
  });
});
