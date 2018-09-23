import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RulesMenuComponent} from './rules-menu/rules-menu.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [RulesMenuComponent],
  exports: [RulesMenuComponent]
})
export class RulesModule {
}
