import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  searchContacts(searchTerm: any): import("./contact.model").Contact[] {
    throw new Error('Method not implemented.');
  }
  getContacts(): import("./contact.model").Contact[] {
    throw new Error('Method not implemented.');
  }
  localStorageService(searchTerm: any): import("./contact.model").Contact[] {
    throw new Error('Method not implemented.');
  }
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null; // ou gérer le cas où `localStorage` n'est pas disponible
  }

  set(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }
  searchContact(term: string, contacts: Contact[]): Contact[] {
    return contacts.filter(contact =>
      contact.nom.toLowerCase().includes(term.toLowerCase()) ||
      contact.prenom.toLowerCase().includes(term.toLowerCase()) ||
      contact.email.toLowerCase().includes(term.toLowerCase())
    );
  }

}
