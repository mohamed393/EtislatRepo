import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentsRoutingModule} from './students-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UIModule} from '../../shared/ui/ui.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    StudentsRoutingModule,
    ReactiveFormsModule,
    UIModule,
    FormsModule,
    NgbPaginationModule,
    NgSelectModule,

  ],
  exports: [

  ],
  providers: []
})
export class StudentsModule {
}
