import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleContentComponent} from './schedule-content/schedule-content.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ScheduleContentComponent],
  exports: [ScheduleContentComponent]
})
export class ScheduleModule {
}
