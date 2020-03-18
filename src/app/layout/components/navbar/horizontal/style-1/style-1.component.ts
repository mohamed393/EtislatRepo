import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { EtrainingConfigService } from '@etraining/services/config.service';
import { EtrainingNavigationService } from '@etraining/components/navigation/navigation.service';
import { EtrainingSidebarService } from '@etraining/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-horizontal-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarHorizontalStyle1Component implements OnInit, OnDestroy
{
    etrainingConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EtrainingConfigService} _etrainingConfigService
     * @param {EtrainingNavigationService} _etrainingNavigationService
     * @param {EtrainingSidebarService} _etrainingSidebarService
     */
    constructor(
        private _etrainingConfigService: EtrainingConfigService,
        private _etrainingNavigationService: EtrainingNavigationService,
        private _etrainingSidebarService: EtrainingSidebarService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get current navigation
        this._etrainingNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._etrainingNavigationService.getCurrentNavigation();
            });

        // Subscribe to the config changes
        this._etrainingConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.etrainingConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
