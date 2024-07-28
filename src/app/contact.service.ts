import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  etat: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly storageKey = 'contacts';

  constructor() { }

  getContacts(): Contact[] {
    const contactsJson = localStorage.getItem(this.storageKey);
    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  deleteContact(id: number): void {
    const contacts = this.getContacts();
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedContacts));
  }
}
