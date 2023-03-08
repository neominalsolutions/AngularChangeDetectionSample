import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-onpush-parent-items',
  templateUrl: './onpush-parent-items.component.html',
  styleUrls: ['./onpush-parent-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushParentItemsComponent implements OnInit, DoCheck, OnChanges {
  @Input() numbers: Array<number> = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngDoCheck(): void {
    console.log('OnpushParentItemsComponent-ngDoCheck');
  }

  add(random: number) {
    this.numbers.push(random);
    // this.numbers = [... this.numbers];
    // const a = Object.assign({})
    // this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {}
}

// child componentler parent componentlerden gelen input değerlerine göre kendi statelerini güncelleyebilmek için changeDetectorRef servis üzerinden manuel olarak markForCheck veya detectChanges methodu ile change detection özelliğini açmak zorundadır. Aksi taktirde state değişimi görünmeyecektir.
