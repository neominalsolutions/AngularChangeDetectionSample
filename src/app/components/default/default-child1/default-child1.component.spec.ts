/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefaultChild1Component } from './default-child1.component';

describe('DefaultChild1Component', () => {
  let component: DefaultChild1Component;
  let fixture: ComponentFixture<DefaultChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
