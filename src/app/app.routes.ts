import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajouter', component: AjouteContactComponent },
  { path: '', component: ContactListComponent },
  { path: 'dashboard', component: DashboardComponent },
];
