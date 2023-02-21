import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-default-child1',
  templateUrl: './default-child1.component.html',
  styleUrls: ['./default-child1.component.css'],
})
export class DefaultChild1Component implements OnInit, DoCheck {
  counter: number = 0;

  constructor() {}
  ngDoCheck(): void {
    this.counter++;
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {}
}
