import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RulesMenuComponent} from './rules/rules-menu/rules-menu.component';
import {HomepageViewComponent} from './homepage/homepage-view/homepage-view.component';
import {AppComponent} from './app.component';


const APP_ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomepageViewComponent},
  {path: 'rules', component: RulesMenuComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

