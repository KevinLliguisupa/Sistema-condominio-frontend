/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtrCasaComponent } from './ctrCasa.component';

describe('CtrCasaComponent', () => {
  let component: CtrCasaComponent;
  let fixture: ComponentFixture<CtrCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
