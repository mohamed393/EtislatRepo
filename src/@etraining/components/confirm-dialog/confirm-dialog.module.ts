import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { EtrainingConfirmDialogComponent } from '@etraining/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        EtrainingConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        EtrainingConfirmDialogComponent
    ],
})
export class EtrainingConfirmDialogModule
{
}
