import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {InvoiceService} from 'app/main/pages/invoices/invoice.service';
import {InvoiceModernComponent} from 'app/main/pages/invoices/modern/modern.component';

const routes = [
    {
        path: 'invoices/modern',
        component: InvoiceModernComponent,
        resolve: {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceModernComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        EtrainingSharedModule
    ],
    providers: [
        InvoiceService
    ]
})
export class InvoiceModernModule {
}
