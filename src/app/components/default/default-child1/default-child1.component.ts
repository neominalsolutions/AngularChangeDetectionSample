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

  // angularda js eventlere bağlanmak istersek, angular event yapıp artık dinlemeye başlıyoruz
  // componente bir event bind etmek için kullanılan bir teknik.
  @HostListener('mousemove', ['$event'])
  MouseMove(event: MouseEvent): void {
    //console.log('event', event);
  }

  // @HostListener('window:keyup', ['$event'])
  // KeyPress(event: Event): void {
  //   console.log('keydown-event', event);
  // }

  @HostListener('dblclick', ['$event'])
  dbClick(event: Event): void {
    //console.log('dblclick-event', event);
  }
}
