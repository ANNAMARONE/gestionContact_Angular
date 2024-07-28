import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  standalone: true, // Ajoutez cette ligne
  imports: [CommonModule] // Importez les modules nécessaires ici
})
export class ContactListComponent {
  contacts: any[] = [];

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const storedContacts = localStorage.getItem('contacts');
      if (storedContacts) {
        this.contacts = JSON.parse(storedContacts);
      }
    }
  }

  deleteContact(contact: any): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
