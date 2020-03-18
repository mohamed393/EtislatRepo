import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { EtrainingNavigationComponent } from './navigation.component';
import { EtrainingNavVerticalItemComponent } from './vertical/item/item.component';
import { EtrainingNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { EtrainingNavVerticalGroupComponent } from './vertical/group/group.component';
import { EtrainingNavHorizontalItemComponent } from './horizontal/item/item.component';
import { EtrainingNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        EtrainingNavigationComponent
    ],
    declarations: [
        EtrainingNavigationComponent,
        EtrainingNavVerticalGroupComponent,
        EtrainingNavVerticalItemComponent,
        EtrainingNavVerticalCollapsableComponent,
        EtrainingNavHorizontalItemComponent,
        EtrainingNavHorizontalCollapsableComponent
    ]
})
export class EtrainingNavigationModule
{
}
