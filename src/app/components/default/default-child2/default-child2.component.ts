import { Component, DoCheck, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-child2',
  templateUrl: './default-child2.component.html',
  styleUrls: ['./default-child2.component.css'],
})
export class DefaultChild2Component implements OnInit, DoCheck {
  counter: number = 0;

  constructor() {}
  ngDoCheck(): void {
    this.counter++;
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {}
}
