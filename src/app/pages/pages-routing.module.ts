import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './extrapages/page404/page404.component';

const routes: Routes = [
    { path: '', loadChildren: () =>  import('./dashboards/dashboards.module').then(m => m.DashboardsModule)},
  {path: 'films', loadChildren: () => import('./Films/films.module').then(m => m.FilmsModule)},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
