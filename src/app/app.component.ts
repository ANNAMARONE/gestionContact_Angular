import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';

import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title1 = 'GestionContact';

  // title1 = 'gestionContact';
  title = 'angular17_login_signup_localstorage';

  // @Component({
  //   selector: 'app-root',
  //   templateUrl: './app.component.html',
  //   styleUrl: './app.component.css'
  // })
  // export class AppComponent {
}
