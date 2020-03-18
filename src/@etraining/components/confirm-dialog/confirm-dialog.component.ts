import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'etraining-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class EtrainingConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<EtrainingConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<EtrainingConfirmDialogComponent>
    )
    {
    }

}
