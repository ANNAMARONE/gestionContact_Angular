import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgForm } from '@angular/forms';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
import { AfficherCorbeilleComponent } from './afficher-corbeille/afficher-corbeille.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AjouterContactComponent,AfficherContactComponent,AfficherCorbeilleComponent,ModifierContactComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestionContact';
  
}
