import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { HowTwoComponent } from './how-two/how-two.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FindUsComponent } from './find-us/find-us.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, HowTwoComponent, OurMenuComponent, FindUsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
