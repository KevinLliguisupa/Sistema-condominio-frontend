/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinGastosComponent } from './finGastos.component';

describe('FinGastosComponent', () => {
  let component: FinGastosComponent;
  let fixture: ComponentFixture<FinGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
