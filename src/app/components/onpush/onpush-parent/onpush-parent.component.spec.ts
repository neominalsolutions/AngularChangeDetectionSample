/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnpushParentComponent } from './onpush-parent.component';

describe('OnpushParentComponent', () => {
  let component: OnpushParentComponent;
  let fixture: ComponentFixture<OnpushParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
