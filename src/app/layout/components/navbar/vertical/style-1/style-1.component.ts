import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { EtrainingConfigService } from '@etraining/services/config.service';
import { EtrainingNavigationService } from '@etraining/components/navigation/navigation.service';
import { EtrainingPerfectScrollbarDirective } from '@etraining/directives/etraining-perfect-scrollbar/etraining-perfect-scrollbar.directive';
import { EtrainingSidebarService } from '@etraining/components/sidebar/sidebar.service';

@Component({
    selector     : 'navbar-vertical-style-1',
    templateUrl  : './style-1.component.html',
    styleUrls    : ['./style-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy
{
    etrainingConfig: any;
    navigation: any;

    // Private
    private _etrainingPerfectScrollbar: EtrainingPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EtrainingConfigService} _etrainingConfigService
     * @param {EtrainingNavigationService} _etrainingNavigationService
     * @param {EtrainingSidebarService} _etrainingSidebarService
     * @param {Router} _router
     */
    constructor(
        private _etrainingConfigService: EtrainingConfigService,
        private _etrainingNavigationService: EtrainingNavigationService,
        private _etrainingSidebarService: EtrainingSidebarService,
        private _router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(EtrainingPerfectScrollbarDirective, {static: true})
    set directive(theDirective: EtrainingPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this._etrainingPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._etrainingNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._etrainingPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this._etrainingPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                    if ( this._etrainingSidebarService.getSidebar('navbar') )
                    {
                        this._etrainingSidebarService.getSidebar('navbar').close();
                    }
                }
            );

        // Subscribe to the config changes
        this._etrainingConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.etrainingConfig = config;
            });

        // Get current navigation
        this._etrainingNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._etrainingNavigationService.getCurrentNavigation();
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void
    {
        this._etrainingSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._etrainingSidebarService.getSidebar('navbar').toggleFold();
    }
}
