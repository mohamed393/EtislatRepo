import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfigurationsRoutingModule} from './configurations-routing.module';
import {ConfigurationItemservice} from './configuration-item/configuration-item.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgbNavModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';
import {TestModule} from '../test/test.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {ConfigurationItemComponent} from './configuration-item/configuration-item.component';
import {UIModule} from '../../shared/ui/ui.module';


@NgModule({
  declarations: [ConfigurationItemComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({}),
    ConfigurationsRoutingModule,
    NgbNavModule,
    UiSwitchModule,
    TestModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgSelectModule,
    UIModule
  ], providers: [ConfigurationItemservice]
})
export class ConfigurationsModule {
}
