import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Display3Dv2 } from './display3d-v2/display3d-v2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainV2Component } from './main-v2/main-v2.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageFlagsComponent } from './language-flags/language-flags.component';
import { I18nService } from '../core/i18n.service';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MainV2Component,
  }
];

@NgModule({
  declarations: [
    Display3Dv2,
    HeaderComponent,
    FooterComponent,
    MainV2Component,
    FormComponent,
    LanguageFlagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [I18nService]
})
export class V2Module {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
