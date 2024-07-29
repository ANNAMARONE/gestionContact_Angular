import { Routes } from '@angular/router';
import { ContactListComponent } from './contacts-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailsComponent }
];
