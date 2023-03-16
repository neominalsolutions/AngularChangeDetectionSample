import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

  constructor(private ch: ChangeDetectorRef) {}

  ngDoCheck(): void {
    this.counter++;
    // this.ch.detectChanges();
    // state değişiklikleri hakkında haber almak istiyorum.
  }

  ngOnInit() {}

  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {}
}
