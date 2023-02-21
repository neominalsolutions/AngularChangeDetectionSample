import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OnpushParentItemsComponent } from '../onpush-parent-items/onpush-parent-items.component';

@Component({
  selector: 'app-onpush-parent',
  templateUrl: './onpush-parent.component.html',
  styleUrls: ['./onpush-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushParentComponent implements OnInit, DoCheck {
  numbers: Array<number> = [];

  @ViewChild('childItem', { static: true }) child:
    | OnpushParentItemsComponent
    | undefined;

  constructor() {}

  ngDoCheck(): void {
    console.log('OnpushParentComponent');
  }

  random() {
    const random = Math.round(Math.random() * 100);
    this.numbers.push(random);
    this.child?.add(random);
  }

  ngOnInit() {}
}
