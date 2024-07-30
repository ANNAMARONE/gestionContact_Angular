import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-contact.component.html',
  styleUrls: ['./modifier-contact.component.scss']
})
export class ModifierContactComponent implements OnInit {
  contact: Contact = { nom: '', prenom: '', email: '', telephone: '', etat: 'actif', description: '' };
  index: number | null = null;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = +params['index']; // Convertir en nombre
      if (this.index !== null && this.index !== undefined) {
        const contactsString = this.localStorageService.get('contacts');
        if (contactsString) {
          const contacts: Contact[] = JSON.parse(contactsString);
          this.contact = contacts[this.index] || this.contact;
        }
      }
    });
  }

  onSubmit(): void {
    if (this.index !== null && this.index !== undefined) {
      const contactsString = this.localStorageService.get('contacts');
      if (contactsString) {
        const contacts: Contact[] = JSON.parse(contactsString);
        contacts[this.index] = this.contact;
        this.localStorageService.set('contacts', JSON.stringify(contacts));
      }
    }
    this.router.navigate(['/contacts']); 
  }
}
