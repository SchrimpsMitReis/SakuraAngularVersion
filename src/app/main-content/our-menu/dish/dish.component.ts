import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  public dishesNames: string[] = [
    "TONKATSU RAMEN",
    "SPICY MISO RAMEN",
    "SHIO RAMEN"
  ]
  @Input() name!: string;
  @Input() url!: string;
  @Input() switch: boolean = false;

  ngOnInit(): void{
    if (this.switch){
      
    }
  }
}
