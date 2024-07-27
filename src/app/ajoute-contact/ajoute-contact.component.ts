import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contact } from './contact.model';




@Component({
  selector: 'app-ajoute-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ajoute-contact.component.html',
  styleUrl: './ajoute-contact.component.scss'
})
export class AjouteContactComponent  {

contacts: contact[]=[];
utilisateur:contact = new contact();
  AjouterContact(): void{
    this.contacts.push(this.utilisateur);
    this.utilisateur = new contact();
    localStorage.setItem('contacts',JSON.stringify(this.contacts))  }
}


