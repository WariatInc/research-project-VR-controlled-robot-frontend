import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotListRoutingModule } from './robot-list-routing.module';
import { RobotListComponent } from './robot-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RobotListComponent],
  imports: [
    CommonModule,
    RobotListRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class RobotListModule {}
