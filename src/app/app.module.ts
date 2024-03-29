import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultChild1Component } from './components/default/default-child1/default-child1.component';
import { DefaultChild2Component } from './components/default/default-child2/default-child2.component';
import { DefaultParentComponent } from './components/default/default-parent/default-parent.component';
import { OnpushChild1Component } from './components/onpush/onpush-child1/onpush-child1.component';
import { OnpushChild2Component } from './components/onpush/onpush-child2/onpush-child2.component';
import { OnpushParentItemsComponent } from './components/onpush/onpush-parent-items/onpush-parent-items.component';
import { OnpushParentComponent } from './components/onpush/onpush-parent/onpush-parent.component';
import { TestOnPushComponent } from './components/test-on-push/test-on-push.component';
import { Test1PushComponent } from './components/test1-push/test1-push.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultParentComponent,
    DefaultChild1Component,
    DefaultChild2Component,
    OnpushParentComponent,
    OnpushChild1Component,
    OnpushChild2Component,
    OnpushParentItemsComponent,
    TestOnPushComponent,
    Test1PushComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
