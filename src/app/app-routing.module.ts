import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layouts/layout.component';
import {GuardService} from './core/services/Guard.service';

const routes: Routes = [
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    // tslint:disable-next-line: max-line-length
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate: [GuardService] // method here if he login ok to / if not i will tell him in this method to go to login in account
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

// canActivate: [AuthGuard]
