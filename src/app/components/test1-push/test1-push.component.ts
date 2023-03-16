import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test1-push',
  templateUrl: './test1-push.component.html',
  styleUrls: ['./test1-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1PushComponent {

}
