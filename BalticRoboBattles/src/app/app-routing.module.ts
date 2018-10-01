import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RulesMenuComponent} from './rules/rules-menu/rules-menu.component';
import {HomepageViewComponent} from './homepage/homepage-view/homepage-view.component';
import {AppComponent} from './app.component';
import {ScheduleContentComponent} from './schedule/schedule-content/schedule-content.component';
import {CompetitorContentComponent} from './competitor-zone/competitor-content/competitor-content.component';
import {ForKidsContentComponent} from './for-kids/for-kids-content/for-kids-content.component';
import {PartnersContentComponent} from './partners/partners-content/partners-content.component';


const APP_ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomepageViewComponent},
  {path: 'rules', component: RulesMenuComponent},
  {path: 'schedule', component: ScheduleContentComponent},
  {path: 'competitor', component: CompetitorContentComponent},
  {path: 'forkids', component: ForKidsContentComponent},
  {path: 'partners', component: PartnersContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

