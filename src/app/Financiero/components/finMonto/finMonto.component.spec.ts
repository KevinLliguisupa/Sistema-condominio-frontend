/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinMontoComponent } from './finMonto.component';

describe('FinMontoComponent', () => {
  let component: FinMontoComponent;
  let fixture: ComponentFixture<FinMontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinMontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
