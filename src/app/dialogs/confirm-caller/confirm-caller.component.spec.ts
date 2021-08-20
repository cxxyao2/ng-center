import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCallerComponent } from './confirm-caller.component';

describe('ConfirmCallerComponent', () => {
  let component: ConfirmCallerComponent;
  let fixture: ComponentFixture<ConfirmCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
