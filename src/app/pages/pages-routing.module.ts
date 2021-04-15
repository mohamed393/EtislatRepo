import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './extrapages/page404/page404.component';
import {AuthenticationService} from '../core/services/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return AuthenticationService.isStudent() ? import('./student-test/student-test.module').then(m => m.StudentTestModule) :
        import('./dashboards/dashboards.module').then(m => m.DashboardsModule);
    }
  },
  {path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
  {path: 'instructors', loadChildren: () => import('./instructors/Instructors.module').then(m => m.InstructorsModule)},
  {path: 'student-groups', loadChildren: () => import('./student-groups/student-groups.module').then(m => m.StudentGroupsModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)},
  {path: 'outcomes', loadChildren: () => import('./outcomes/outcomes.module').then(m => m.OutcomesModule)},
  {path: 'configurations', loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationsModule)},
  {path: 'tests', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
  {path: 'question-bank', loadChildren: () => import('./question-bank/question-bank.module').then(m => m.QuestionBankModule)},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
