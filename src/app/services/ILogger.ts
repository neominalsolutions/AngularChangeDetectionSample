import { InjectionToken } from '@angular/core';

// unique key
export const Logger = new InjectionToken<ILogger>('logger');
export const IsDevelopment = new InjectionToken<boolean>('isDevelopment');

export interface ILogger {
  log(message: string): void;
}
