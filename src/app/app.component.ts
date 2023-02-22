import { Component, Inject, OnInit } from '@angular/core';
import { ILogger, Logger } from './services/ILogger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ChangeDetectionSample';

  constructor(
    @Inject(Logger) private logger: ILogger,
    @Inject('apiKey') private apiKey: string,
    @Inject('oldValue') private oldValue: string
  ) {}
  ngOnInit(): void {
    console.log('apiKey', this.apiKey);
    console.log('oldValue gördüğünde', this.oldValue);
    console.log('this.logger', this.logger);
    this.logger.log('message-1');
  }
}
