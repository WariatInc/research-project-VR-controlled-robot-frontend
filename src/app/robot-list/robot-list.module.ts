import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotListRoutingModule } from './robot-list-routing.module';
import { RobotListComponent } from './robot-list.component';


@NgModule({
  declarations: [
    RobotListComponent
  ],
  imports: [
    CommonModule,
    RobotListRoutingModule
  ]
})
export class RobotListModule { }
