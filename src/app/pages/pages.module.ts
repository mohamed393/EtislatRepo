import {NgModule} from '@angular/core';


import {ComingSoonModule} from 'app/pages/coming-soon/coming-soon.module';
import {Error404Module} from 'app/pages/errors/404/error-404.module';
import {Error500Module} from 'app/pages/errors/500/error-500.module';
import {InvoiceModernModule} from 'app/pages/invoices/modern/modern.module';
import {InvoiceCompactModule} from 'app/pages/invoices/compact/compact.module';
import {MaintenanceModule} from 'app/pages/maintenance/maintenence.module';
import {PricingModule} from 'app/pages/pricing/pricing.module';
import {ProfileModule} from 'app/pages/profile/profile.module';
import {SearchClassicModule} from 'app/pages/search/classic/search-classic.module';
import {SearchModernModule} from 'app/pages/search/modern/search-modern.module';
import {FaqModule} from 'app/pages/faq/faq.module';
import {KnowledgeBaseModule} from 'app/pages/knowledge-base/knowledge-base.module';
import {SampleModule} from './sample/sample.module';

@NgModule({
    imports: [
        // Authentication


        // Coming-soon
        ComingSoonModule,
        // Errors
        Error404Module,
        Error500Module,

        // Invoices
        InvoiceModernModule,
        InvoiceCompactModule,

        // Maintenance
        MaintenanceModule,

        // Pricing
        PricingModule,

        // Profile
        ProfileModule,

        // Search
        SearchClassicModule,
        SearchModernModule,
        SampleModule,
        // Faq
        FaqModule,

        // Knowledge base
        KnowledgeBaseModule
    ]
})
export class PagesModule {

}
