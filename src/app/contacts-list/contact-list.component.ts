import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contacts.service';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  searchContacts() {
    if (this.searchTerm.trim()) {
      this.contacts = this.contactService.searchContacts(this.searchTerm);
    } else {
      this.contacts = this.contactService.getContacts();
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/contact', id]);
  }
}
