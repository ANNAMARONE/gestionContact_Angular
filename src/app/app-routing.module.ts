
// app-routing.module.ts

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';
import { AfficherCorbeilleComponent } from './afficher-corbeille/afficher-corbeille.component';
import { CommonModule } from '@angular/common';

NgModule({
  declarations: [],
  imports: [CommonModule],
});

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },

{ path: '', redirectTo: '/contacts', pathMatch: 'full' },
{ path: 'contacts', component: AfficherContactComponent },
{ path: 'ajouter-contact', component: AjouterContactComponent },
{ path: 'modifier-contact/:index', component: ModifierContactComponent },
{ path: 'corbeille', component: AfficherCorbeilleComponent }, 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})
export class AppRoutingModule {}
