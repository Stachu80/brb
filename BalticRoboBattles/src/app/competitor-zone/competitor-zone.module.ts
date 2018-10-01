import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompetitorContentComponent} from './competitor-content/competitor-content.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  declarations: [CompetitorContentComponent],
  exports: [CompetitorContentComponent]
})
export class CompetitorZoneModule {
}
