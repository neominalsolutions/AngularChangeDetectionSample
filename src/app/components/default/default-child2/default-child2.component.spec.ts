/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultChild2Component } from './default-child2.component';

describe('DefaultChild2Component', () => {
  let component: DefaultChild2Component;
  let fixture: ComponentFixture<DefaultChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
