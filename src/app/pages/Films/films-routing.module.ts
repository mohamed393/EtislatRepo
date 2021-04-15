import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmComponent} from './film/film.component';
import {FilmService} from '../../core/services/film.service';


const routes: Routes = [
    {
        path: '',
        component: FilmComponent,
        resolve: {
            data1: FilmService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmsRoutingModule {
}
