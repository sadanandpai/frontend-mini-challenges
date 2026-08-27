import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()), provideZonelessChangeDetection()],
};
