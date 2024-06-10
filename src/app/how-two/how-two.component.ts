import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderOptionComponent } from './order-option/order-option.component';

@Component({
  selector: 'app-how-two',
  standalone: true,
  imports: [CommonModule, OrderOptionComponent],
  templateUrl: './how-two.component.html',
  styleUrl: './how-two.component.scss'
})
export class HowTwoComponent {

}
