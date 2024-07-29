import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
// import { CorbeilleComponent } from './corbeille/corbeille.component';
// import { ModifiactionComponent } from './modifiaction/modifiaction.component';
// import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // CorbeilleComponent,
    // ModifiactionComponent,
    // AfficherContactComponent,
    RouterModule,
    CommonModule,
    ContactListComponent,
    AjouteContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title1 = 'GestionContact';
  title = 'angular17_login_signup_localstorage';
}
