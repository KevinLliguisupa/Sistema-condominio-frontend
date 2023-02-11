/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtrReservacionComponent } from './ctrReservacion.component';

describe('CtrReservacionComponent', () => {
  let component: CtrReservacionComponent;
  let fixture: ComponentFixture<CtrReservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrReservacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
