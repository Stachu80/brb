import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnersContentComponent} from './partners-content/partners-content.component';
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
  declarations: [PartnersContentComponent],
  exports: [PartnersContentComponent]
})
export class PartnersModule {
}
