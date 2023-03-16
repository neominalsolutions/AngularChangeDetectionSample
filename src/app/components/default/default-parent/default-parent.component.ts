import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-parent',
  templateUrl: './default-parent.component.html',
  styleUrls: ['./default-parent.component.css'],
})
export class DefaultParentComponent implements OnInit, DoCheck {
  numbers: Array<number> = [];

  constructor() {}
  ngDoCheck(): void {}

  random() {
    const random = Math.round(Math.random() * 100);
    this.numbers.push(random);
  }

  ngOnInit() {}
}
