import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilmsRoutingModule} from './films-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UIModule} from '../../shared/ui/ui.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import { FilmComponent } from './film/film.component';
import {SummaryPipe} from '../../shared/summary.pipe';


@NgModule({
    declarations: [FilmComponent, SummaryPipe],
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    FilmsRoutingModule,
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
export class FilmsModule {
}
