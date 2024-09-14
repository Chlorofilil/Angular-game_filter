import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, inject } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(FontAwesomeModule)]
}).catch(err => console.error(err));