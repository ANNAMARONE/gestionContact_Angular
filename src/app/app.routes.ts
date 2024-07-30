import { Routes } from '@angular/router';
import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';
import { AfficherCorbeilleComponent } from './afficher-corbeille/afficher-corbeille.component';


export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: AfficherContactComponent },
  { path: 'ajouter-contact', component: AjouterContactComponent },
  { path: 'modifier-contact/:index', component: ModifierContactComponent },
  { path: 'corbeille', component: AfficherCorbeilleComponent },  

];