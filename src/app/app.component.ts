import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';
import { NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,AjouteContactComponent],

  imports: [CommonModule, ContactListComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'GestionContact';

  title = 'gestionContact';

}
