import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageViewComponent} from './homepage-view/homepage-view.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [HomepageViewComponent],
  exports: [HomepageViewComponent]
})
export class HomepageModule {
}
