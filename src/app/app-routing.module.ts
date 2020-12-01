import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TestPageComponent} from './components/test-page/test-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
