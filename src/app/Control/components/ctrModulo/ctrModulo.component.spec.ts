/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtrModuloComponent } from './ctrModulo.component';

describe('CtrModuloComponent', () => {
  let component: CtrModuloComponent;
  let fixture: ComponentFixture<CtrModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
