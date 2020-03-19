import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';

import {EtrainingDirectivesModule} from '@etraining/directives/directives';
import {EtrainingPipesModule} from '@etraining/pipes/pipes.module';
import {MatFormFieldModule, MatIconModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        FlexLayoutModule,
        EtrainingDirectivesModule,
        EtrainingPipesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        FlexLayoutModule,
        EtrainingDirectivesModule,
        EtrainingPipesModule
    ]
})
export class EtrainingSharedModule {
}
