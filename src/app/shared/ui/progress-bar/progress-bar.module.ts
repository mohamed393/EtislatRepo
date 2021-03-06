import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {EtrainingProgressBarComponent} from './progress-bar.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    EtrainingProgressBarComponent
  ],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    RouterModule,

    // MatButtonModule,
    // MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    EtrainingProgressBarComponent
  ]
})
export class EtrainingProgressBarModule {
}
