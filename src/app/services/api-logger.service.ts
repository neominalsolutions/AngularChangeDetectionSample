import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root',
})
export class ApiLoggerService implements ILogger {
  constructor() {}

  log(message: string): void {
    console.log('api-logger', message);
  }
}
