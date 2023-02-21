/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnpushChild1Component } from './onpush-child1.component';

describe('OnpushChild1Component', () => {
  let component: OnpushChild1Component;
  let fixture: ComponentFixture<OnpushChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
