/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinReporteGeneralComponent } from './finReporteGeneral.component';

describe('FinReporteGeneralComponent', () => {
  let component: FinReporteGeneralComponent;
  let fixture: ComponentFixture<FinReporteGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinReporteGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
