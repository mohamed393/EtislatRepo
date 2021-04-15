import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserProfileService} from '../../core/services/user.service';
import {FilmComponent} from './film/film.component';


const routes: Routes = [
  {
    path: '',
    component: FilmComponent,
  },
  // {
  //   path: 'add',
  //   component: StudentRegisterComponent,
  //   resolve: {
  //     studentgroupData: StudentGroupService
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {
}
