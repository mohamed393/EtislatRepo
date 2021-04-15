import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UIModule} from './ui/ui.module';
import {NgApexchartsModule} from 'ng-apexcharts';
import {WidgetModule} from './ui/widget/widget.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    UIModule,
    NgApexchartsModule,
    WidgetModule,
  ],
})

export class SharedModule {
}
