import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhoneLinkComponent } from './phonelink/phone-link.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, PhoneLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
