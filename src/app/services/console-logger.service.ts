import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggerService implements ILogger {
  constructor() {}

  log(message: string): void {
    console.log('console-logger', message);
  }
}
