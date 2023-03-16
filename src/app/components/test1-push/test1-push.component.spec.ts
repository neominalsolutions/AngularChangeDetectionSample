import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1PushComponent } from './test1-push.component';

describe('Test1PushComponent', () => {
  let component: Test1PushComponent;
  let fixture: ComponentFixture<Test1PushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1PushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1PushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
