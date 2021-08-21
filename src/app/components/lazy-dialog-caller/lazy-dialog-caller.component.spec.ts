import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDialogCallerComponent } from './lazy-dialog-caller.component';

describe('LazyDialogCallerComponent', () => {
  let component: LazyDialogCallerComponent;
  let fixture: ComponentFixture<LazyDialogCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyDialogCallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDialogCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
