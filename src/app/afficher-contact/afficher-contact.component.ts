import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Contact } from '../contact.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-afficher-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afficher-contact.component.html',
  styleUrls: ['./afficher-contact.component.scss']
})
export class AfficherContactComponent implements OnInit {
  contacts: Contact[] = [];
  corbeille: Contact[] = [];
  contactEnCours: Contact | null = null;
  indexEnCours: number | null = null;

  constructor(private localStorageService: LocalStorageService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadContactsFromLocalStorage();
    }
  }

  loadContactsFromLocalStorage(): void {
    const contactsString = this.localStorageService.get('contacts');
    const corbeilleString = this.localStorageService.get('corbeille');
    if (contactsString) {
      this.contacts = JSON.parse(contactsString);
    }
    if (corbeilleString) {
      this.corbeille = JSON.parse(corbeilleString);
    }
  }

  supprimerContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      const contactSupprime = this.contacts.splice(index, 1)[0];
      this.corbeille.push(contactSupprime);
      this.saveContactsToLocalStorage();
    }
  }

  updateContact(): void {
    if (this.indexEnCours !== null && this.contactEnCours) {
      this.contacts[this.indexEnCours] = this.contactEnCours;
      this.saveContactsToLocalStorage();
      this.contactEnCours = null;
      this.indexEnCours = null;
    }
  }

  saveContactsToLocalStorage(): void {
    this.localStorageService.set('contacts', JSON.stringify(this.contacts));
    this.localStorageService.set('corbeille', JSON.stringify(this.corbeille));
  }

  editContact(index: number): void {
    this.router.navigate(['/modifier-contact', index]);
  }
}
