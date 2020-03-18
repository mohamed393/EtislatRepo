import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EtrainingPipesModule } from '@etraining/pipes/pipes.module';

import { EtrainingMaterialColorPickerComponent } from '@etraining/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        EtrainingMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        EtrainingPipesModule
    ],
    exports: [
        EtrainingMaterialColorPickerComponent
    ],
})
export class EtrainingMaterialColorPickerModule
{
}
