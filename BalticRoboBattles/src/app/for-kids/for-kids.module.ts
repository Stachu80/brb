import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForKidsContentComponent} from './for-kids-content/for-kids-content.component';
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
  declarations: [ForKidsContentComponent],
  exports: [ForKidsContentComponent]
})
export class ForKidsModule {
}
