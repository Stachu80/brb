import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RulesMenuComponent} from './rules-menu/rules-menu.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  declarations: [RulesMenuComponent],
  exports: [RulesMenuComponent]
})
export class RulesModule {
}
