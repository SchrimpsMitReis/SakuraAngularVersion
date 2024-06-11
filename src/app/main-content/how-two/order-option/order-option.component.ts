import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-order-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-option.component.html',
  styleUrls: ['./order-option.component.scss']
})
export class OrderOptionComponent {
  @Input() text!: string;
  @Input() url!: string;
  
  constructor(){
    
  }
  
}
