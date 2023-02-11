/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinIngresosGastosMensualesComponent } from './finIngresosGastosMensuales.component';

describe('FinIngresosGastosMensualesComponent', () => {
  let component: FinIngresosGastosMensualesComponent;
  let fixture: ComponentFixture<FinIngresosGastosMensualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinIngresosGastosMensualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinIngresosGastosMensualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
