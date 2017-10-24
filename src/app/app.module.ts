import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductionComponent } from './production/production.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProductComponent } from './products/product/product.component';
import { AgmCoreModule } from '@agm/core';
import { ScrollDirective } from './shared/scroll.directive';

@Injectable()
export class LocalizationConfig {

  constructor(public locale: LocaleService, public translation: TranslationService) { }

  load(): Promise<any> {

    this.locale.addConfiguration()
      .addLanguages(['en', 'sr'])
      .setCookieExpiration(30)
      .defineDefaultLocale('sr', 'RS').defineCurrency('RSD');
    this.locale.init();

    this.translation.addConfiguration()
      .addProvider('./assets/locale/locale-');
    this.translation.init();


    const promise: Promise<any> = new Promise((resolve: any) => {
      this.translation.translationChanged.subscribe(() => {
        resolve(true);
      });
    });

    this.translation.init();

    return promise;
  }

}

export function initLocalization(localizationConfig: LocalizationConfig): Function {
  return () => localizationConfig.load();
}
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ProductionComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    ProductComponent,
    ScrollDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    TranslationModule.forRoot(),
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKH6h3THlAjx_9e883-qKXbfN79kMOqao'
    })


  ],
  providers: [
    LocalizationConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [LocalizationConfig],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public locale: LocaleService, public translation: TranslationService) {

    //   this.locale.addConfiguration()
    //     .addLanguages(['en', 'sr'])
    //     .setCookieExpiration(30)
    //     .defineDefaultLocale('sr', 'RS')
    //     .defineCurrency('RSD');

    //   this.locale.init();

    //   this.translation.addConfiguration()
    //     .addProvider('./assets/locale/locale-');
    //   this.translation.init();
  }
}
