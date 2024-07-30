import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = JSON.parse(localStorage.getItem('contacts') || '[]');

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  searchContacts(term: string): Contact[] {
    return this.contacts.filter(contact => 
      contact.nom.toLowerCase().includes(term.toLowerCase()) ||
      contact.prenom.toLowerCase().includes(term.toLowerCase()) ||
      contact.email.toLowerCase().includes(term.toLowerCase())
    );
  }
}
