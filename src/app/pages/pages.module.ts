import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import {
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExtrapagesModule } from './extrapages/extrapages.module';
import { TranslateModule } from '@ngx-translate/core';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    UIModule,
    NgbNavModule,
    NgbTooltipModule,
    PerfectScrollbarModule,
    ExtrapagesModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }

  ],
})
export class PagesModule {}
