import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { ContactService } from './app/contacts.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule),
    provideRouter(routes),
    ContactService
  ]
}).catch(err => console.error(err));
