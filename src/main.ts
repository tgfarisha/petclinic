import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Bootstrap your application and provide HttpClientModule
bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideRouter(routes),
  ]
});
