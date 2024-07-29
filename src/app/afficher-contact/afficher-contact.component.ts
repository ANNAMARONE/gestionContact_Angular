import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';



@Component({
  selector: 'app-afficher-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afficher-contact.component.html',
  styleUrl: './afficher-contact.component.scss'
})
export class AfficherContactComponent {
utilisateur: any;

}
