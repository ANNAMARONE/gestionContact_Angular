import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AjouteContactComponent } from './ajoute-contact/ajoute-contact.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AjouteContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestionContact';
  
}
