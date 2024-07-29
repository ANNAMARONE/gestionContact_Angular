import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contact } from './contact.model';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-ajoute-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajoute-contact.component.html',
  styleUrl: './ajoute-contact.component.scss',
})
export class AjouteContactComponent implements OnInit {
  contacts: contact[] = [];
  corbeille: contact[] = [];
  utilisateur: contact = new contact();
  contactEnCours: contact | null = null;
  indexEnCours: number | null = null;

  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    const contactsString = this.localStorageService.get('contacts');
    if (contactsString) {
      this.contacts = contactsString;
    } else {
      this.contacts = [];
    }
  }

  AjouterContact(): void {
    this.contacts.push(this.utilisateur);
    this.utilisateur = new contact();
    this.localStorageService.set('contacts', this.contacts);
  }

  SupprimerContact(contact: contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      const contactSupprime = this.contacts.splice(index, 1)[0];
      this.corbeille.push(contactSupprime);
    }
  }
  RestaurerContact(contact: contact): void {
    const index = this.corbeille.indexOf(contact);
    if (index !== -1) {
      const contactRestauré = this.corbeille.splice(index, 1)[0];
      this.contacts.push(contactRestauré);
    }
  }

  editContact(index: number): void {
    this.contactEnCours = { ...this.contacts[index] };
    this.indexEnCours = index;
  }
  ModifierContact(): void {
    if (this.indexEnCours !== null && this.contactEnCours) {
      this.contacts[this.indexEnCours] = this.contactEnCours;
      this.contactEnCours = null;
      this.indexEnCours = null;
    }
  }
}
