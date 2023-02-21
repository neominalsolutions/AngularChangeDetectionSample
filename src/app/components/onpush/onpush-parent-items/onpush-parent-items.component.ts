import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-onpush-parent-items',
  templateUrl: './onpush-parent-items.component.html',
  styleUrls: ['./onpush-parent-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushParentItemsComponent implements OnInit, DoCheck {
  @Input() numbers: Array<number> = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngDoCheck(): void {
    console.log('OnpushParentItemsComponent-ngDoCheck');
  }

  add(random: number) {
    this.numbers.push(random);
    this.changeDetectorRef.markForCheck();
  }

  ngOnInit() {}
}
