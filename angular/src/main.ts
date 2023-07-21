import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { APP_BASE_HREF } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: APP_BASE_HREF,
      useValue: '/frontend-mini-challenges/angular/'
    }
  ]
}).catch(err => console.error(err));