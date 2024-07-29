import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterOutlet } from '@angular/router';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';
import { NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet,AjouteContactComponent],

  imports: [CommonModule, ContactListComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule]
})
export class AppComponent {
  title = 'gestionContact_Angular';

}
