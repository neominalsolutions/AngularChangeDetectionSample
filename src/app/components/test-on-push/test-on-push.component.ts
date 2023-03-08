import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-on-push',
  templateUrl: './test-on-push.component.html',
  styleUrls: ['./test-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOnPushComponent {

}
