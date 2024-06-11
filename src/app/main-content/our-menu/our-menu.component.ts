import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DishComponent } from './dish/dish.component';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [CommonModule, DishComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
