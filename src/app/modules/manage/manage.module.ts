import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ComponentsModule
  ]
})
export class ManageModule { 
  constructor() {
    //'Manage Moudle with lazy loading'
  }
}
