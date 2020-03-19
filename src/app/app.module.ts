import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { EtrainingModule } from '@etraining/etraining.module';
import { EtrainingSharedModule } from '@etraining/shared.module';
import { EtrainingProgressBarModule, EtrainingSidebarModule, EtrainingThemeOptionsModule } from '@etraining/components';

import { etrainingConfig } from 'app/etraining-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './main/pages/pages.module#PagesModule'
    }, {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,
        // Etraining modules
        EtrainingModule.forRoot(etrainingConfig),
        EtrainingProgressBarModule,
        EtrainingSharedModule,
        EtrainingSidebarModule,
        EtrainingThemeOptionsModule,

        // App modules
        LayoutModule,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
