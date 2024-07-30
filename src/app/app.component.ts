import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterOutlet } from '@angular/router';

import { NgForm } from '@angular/forms';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { AfficherContactComponent } from './afficher-contact/afficher-contact.component';
import { AfficherCorbeilleComponent } from './afficher-corbeille/afficher-corbeille.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [AjouterContactComponent,AfficherContactComponent,AfficherCorbeilleComponent,ModifierContactComponent,RouterOutlet],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'gestionContact_Angular';

}
