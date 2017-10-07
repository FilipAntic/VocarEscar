import { Component, OnInit } from '@angular/core';

import { LocaleService, Language, TranslationService } from 'angular-l10n';
import { SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Language() lang: string;
  currentSlide: number = 0;
  languages: SelectItem[];
  selectedLanguage: any;
  constructor(public locale: LocaleService, private translation: TranslationService) { }

  ngOnInit() {
    this.languages = [];
    let item: SelectItem = { label: this.translation.translate('menu.menuLanguageEnglish'), value: 1 };
    this.languages.push(item);
    item = { label: this.translation.translate('menu.menuLanguageSerbian'), value: 2 };
    this.languages.push(item);
    // item = { label: this.translation.translate('menu.menuLanguageFrench'), value: 3 };
    // this.languages.push(item);
    if (this.lang === 'en') {
      this.selectedLanguage = 1;
    } else if (this.lang === 'sr') {
      this.selectedLanguage = 2;
    } else if (this.lang === 'fr') {
      // this.selectedLanguage = 3;
    }
    console.log(item);
  }

  onChange() {
    if (this.selectedLanguage === 1) {
      this.selectLocale('en', 'US', 'USD');
    }
    else if (this.selectedLanguage === 2) {
      this.selectLocale('sr', 'RS', 'RSD');
    }

  }
  selectLocale(language: string, country: string, currency: string): void {
    this.locale.setDefaultLocale(language, country);
    this.locale.setCurrentCurrency(currency);
    location.reload();
  }
  selectLanguage(language: string): void {
    this.locale.setCurrentLanguage(language);
  }


  onNext(): void {
    if (this.currentSlide === 2) {
      this.currentSlide = 0;
      return;
    }
    this.currentSlide++;
  }

  onPrev(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = 2;
      return;
    }
    this.currentSlide--;
  }
}
