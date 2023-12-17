// language-flags.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-flags',
  templateUrl: './language-flags.component.html',
  styleUrls: ['./language-flags.component.sass']
})
export class LanguageFlagsComponent {

  constructor(private translate: TranslateService) { }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
