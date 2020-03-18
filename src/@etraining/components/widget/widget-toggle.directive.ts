import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[etrainingWidgetToggle]'
})
export class EtrainingWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
