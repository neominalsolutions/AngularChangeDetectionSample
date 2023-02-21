import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-onpush-child1',
  templateUrl: './onpush-child1.component.html',
  styleUrls: ['./onpush-child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushChild1Component implements OnInit, DoCheck {
  counter: number = 0;

  constructor() {}

  ngDoCheck(): void {
    this.counter++;
    console.log('OnpushChild1Component', this.counter);
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {}
}
