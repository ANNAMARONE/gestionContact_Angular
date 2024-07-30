import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contacts.service';
import { Contact } from '../contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  imports: [CommonModule]
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getContactById(id);
  }
}
