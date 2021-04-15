import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import {StatComponent} from './stat/stat.component';
import {TransactionComponent} from './transaction/transaction.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [StatComponent, TransactionComponent],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    NgbModalModule
  ],
  exports: [StatComponent, TransactionComponent]
})
export class WidgetModule {
}
