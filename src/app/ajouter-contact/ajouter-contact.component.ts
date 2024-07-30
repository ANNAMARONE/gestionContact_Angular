import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ajouter-contact.component.html',
  styleUrl: './ajouter-contact.component.scss'
})
export class AjouterContactComponent {
  utilisateur: Contact = new Contact();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  AjouterContact(): void {
    const contactsString = this.localStorageService.get('contacts');
    const contacts: Contact[] = contactsString ? JSON.parse(contactsString) : [];

    contacts.push(this.utilisateur);
    this.localStorageService.set('contacts', JSON.stringify(contacts));

    this.router.navigate(['/contacts']);
  }
  
}
