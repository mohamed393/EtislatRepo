import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { EtrainingDirectivesModule } from '@etraining/directives/directives';
import { EtrainingPipesModule } from '@etraining/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        EtrainingDirectivesModule,
        EtrainingPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        EtrainingDirectivesModule,
        EtrainingPipesModule
    ]
})
export class EtrainingSharedModule
{
}
