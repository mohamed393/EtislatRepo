import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {PricingStyle1Component} from 'app/pages/pricing/style-1/style-1.component';
import {PricingStyle2Component} from 'app/pages/pricing/style-2/style-2.component';
import {PricingStyle3Component} from 'app/pages/pricing/style-3/style-3.component';

const routes = [
    {
        path: 'pricing/style-1',
        component: PricingStyle1Component
    },
    {
        path: 'pricing/style-2',
        component: PricingStyle2Component
    },
    {
        path: 'pricing/style-3',
        component: PricingStyle3Component
    }
];

@NgModule({
    declarations: [
        PricingStyle1Component,
        PricingStyle2Component,
        PricingStyle3Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,

        EtrainingSharedModule
    ]
})
export class PricingModule {
}