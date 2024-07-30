import { Component, NgModule, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { LocalStorageService } from '../local-storage.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-afficher-corbeille',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afficher-corbeille.component.html',
  styleUrl: './afficher-corbeille.component.scss'
})
export class AfficherCorbeilleComponent implements OnInit{
  corbeille: Contact[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadCorbeilleFromLocalStorage();
  }

  loadCorbeilleFromLocalStorage(): void {
    const corbeilleString = this.localStorageService.get('corbeille');
    if (corbeilleString) {
      this.corbeille = JSON.parse(corbeilleString);
    }
  }

  restaurerContact(index: number): void {
    const contactRestaurer = this.corbeille.splice(index, 1)[0];
    const contactsString = this.localStorageService.get('contacts');
    const contacts: Contact[] = contactsString ? JSON.parse(contactsString) : [];
    contacts.push(contactRestaurer);
    this.localStorageService.set('contacts', JSON.stringify(contacts));
    this.localStorageService.set('corbeille', JSON.stringify(this.corbeille));
  }

  supprimerContact(contact: Contact): void {
    const index = this.corbeille.indexOf(contact);
    if (index !== -1) {
      this.corbeille.splice(index, 1);
      this.localStorageService.set('corbeille', JSON.stringify(this.corbeille));
    }
  }
}
