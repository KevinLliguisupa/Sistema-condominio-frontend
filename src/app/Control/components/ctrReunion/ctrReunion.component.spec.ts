/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtrReunionComponent } from './ctrReunion.component';

describe('CtrReunionComponent', () => {
  let component: CtrReunionComponent;
  let fixture: ComponentFixture<CtrReunionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrReunionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
