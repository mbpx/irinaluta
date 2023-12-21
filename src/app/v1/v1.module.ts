import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Display3Dv1 } from './display3d-v1/display3d-v1.component';
import { MainV1Component } from './main-v1/main-v1.component';
import { FormComponent } from './form/form.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageFlagsComponent } from './language-flags/language-flags.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { I18nService } from '../core/i18n.service';
import { HttpLoaderFactory } from '../app.module';

const routes: Routes = [
  {
    path: '',
    component: MainV1Component,
  }
];

@NgModule({
  declarations: [
    Display3Dv1,
    MainV1Component,
    FormComponent,
    LanguageFlagsComponent,
    FooterComponent,
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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [I18nService]
})
export class V1Module {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}