/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinIncidenciasSolucionadasComponent } from './finIncidenciasSolucionadas.component';

describe('FinIncidenciasSolucionadasComponent', () => {
  let component: FinIncidenciasSolucionadasComponent;
  let fixture: ComponentFixture<FinIncidenciasSolucionadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinIncidenciasSolucionadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinIncidenciasSolucionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
