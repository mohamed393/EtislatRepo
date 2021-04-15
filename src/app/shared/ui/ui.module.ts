import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {ClickOutsideModule} from 'ng-click-outside';
import {RouterModule} from '@angular/router';


import {PagetitleComponent} from './pagetitle/pagetitle.component';
import {TranslateModule} from '@ngx-translate/core';
import { TextInputComponent } from './text-input/text-input.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [PagetitleComponent, TextInputComponent],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    RouterModule, QuillModule,
  ],
  exports: [PagetitleComponent, TextInputComponent],
})
export class UIModule {
}
