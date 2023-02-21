import {
  Component,
  DoCheck,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-onpush-child2',
  templateUrl: './onpush-child2.component.html',
  styleUrls: ['./onpush-child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushChild2Component implements OnInit, DoCheck {
  counter: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngDoCheck(): void {
    this.counter++;
    console.log('OnpushChild2Component', this.counter);
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {}
}
