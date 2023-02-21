/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnpushChild2Component } from './onpush-child2.component';

describe('OnpushChild2Component', () => {
  let component: OnpushChild2Component;
  let fixture: ComponentFixture<OnpushChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
