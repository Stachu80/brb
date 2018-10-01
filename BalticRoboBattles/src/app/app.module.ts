import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RulesModule} from './rules/rules.module';
import {HomepageModule} from './homepage/homepage.module';
import {ScheduleModule} from './schedule/schedule.module';
import {ForKidsModule} from './for-kids/for-kids.module';
import {CompetitorZoneModule} from './competitor-zone/competitor-zone.module';
import {PartnersModule} from './partners/partners.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    RulesModule,
    ScheduleModule,
    ForKidsModule,
    CompetitorZoneModule,
    PartnersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
