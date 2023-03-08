import { Component, OnInit } from '@angular/core';

// Shift Alt + OS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ChangeDetectionSample';

  constructor() {}
  ngOnInit(): void {}

  rootClick() {}
}
