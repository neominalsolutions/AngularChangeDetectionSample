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
import { ApiLoggerService } from './services/api-logger.service';
import { ConsoleLoggerService } from './services/console-logger.service';
import { Logger } from './services/ILogger';
import { IsDevelopment } from './services/ILogger';

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
  ],
  imports: [BrowserModule, CommonModule],
  providers: [
    {
      provide: Logger,
      useClass: ApiLoggerService, // DI IOC
    },
    {
      provide: 'apiKey',
      useValue: 'xyz',
    },
    {
      provide: 'oldValue',
      useExisting: 'new',
    },
    {
      provide: 'new',
      useValue: 'new',
    },
    {
      provide: 'IsDevelopment',
      useValue: true,
    },
    {
      provide: Logger,
      useFactory: (IsDevelopment: boolean) => {
        console.log('isDevelopment', IsDevelopment);
        const type = IsDevelopment
          ? new ConsoleLoggerService()
          : new ApiLoggerService();
        console.log('type', type);
        return type;
      },
      deps: ['IsDevelopment'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
