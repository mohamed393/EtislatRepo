import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EtrainingSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        EtrainingSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        EtrainingSearchBarComponent
    ]
})
export class EtrainingSearchBarModule
{
}
