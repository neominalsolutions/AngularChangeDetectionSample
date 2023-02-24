import { Component, Inject, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { NgxPermissionsGuard } from 'ngx-permissions/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ChangeDetectionSample';

  constructor() {}
  ngOnInit(): void {}
}
