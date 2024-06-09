import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { CaptionComponent } from "./caption/caption.component";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, CaptionComponent, NavbarComponent],
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent{}