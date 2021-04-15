import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigurationItemComponent} from './configuration-item/configuration-item.component';
import {ConfigurationItemservice} from './configuration-item/configuration-item.service';


const routes: Routes = [{
  path: '',
  component: ConfigurationItemComponent,
  resolve: {
    configData: ConfigurationItemservice,
  },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule {
}
