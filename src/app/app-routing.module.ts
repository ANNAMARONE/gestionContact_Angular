import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { Routes } from '@angular/router';
import { ContactListComponent } from './contacts-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailsComponent }
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
