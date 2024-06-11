import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caption.component.html',
  styleUrl: './caption.component.scss'
})
export class CaptionComponent {
  public title: string;
  public subTitle: string;

  constructor() {
    this.title = "SAKURA RAMEN";
    this.subTitle = this.changeLanguage()
  }
  subTitleLang = [
    "Die besten Ramen der Stadt",
    "The best ramen in town",
    "Les meilleurs ramen de la ville",
    "Los mejores ramen de la ciudad",
    "Şehrin en iyi ramenleri",
    "أفضل رامين في المدينة",
    "Лучшие рамены в городе",
    "城里最好的拉面",
    "街で最高のラーメン",
    "도시 최고의 라면",
    "शहर में सबसे अच्छा रामेन",
  ]

  changeLanguage(i = 0) {
    return this.subTitleLang[i]
  }
}
