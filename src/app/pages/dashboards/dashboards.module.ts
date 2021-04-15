import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DashboardsRoutingModule} from './dashboards-routing.module';
import {UIModule} from '../../shared/ui/ui.module';

import {NgbCarouselModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {DashboardComponent} from './dashboard/dashboard.component';
import {WidgetModule} from '../../shared/ui/widget/widget.module';
import {SharedModule} from '../../shared/shared.module';
import {NgApexchartsModule} from 'ng-apexcharts';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    SharedModule,
    WidgetModule,
    NgApexchartsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    PerfectScrollbarModule,
    NgbPaginationModule,
    NgbCarouselModule,
  ],
  providers: [ ]
})
export class DashboardsModule {
}
