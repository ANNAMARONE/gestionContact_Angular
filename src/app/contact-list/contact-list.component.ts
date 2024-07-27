import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'] // Assurez-vous que ce fichier existe
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    if (typeof localStorage !== 'undefined') {
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
        this.contacts = JSON.parse(storedContacts);
      }
    } else {
      console.warn('localStorage is not available.');
    }
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
  }
}
