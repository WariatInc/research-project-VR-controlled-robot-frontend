import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, LogoutRoutingModule, MatProgressSpinnerModule],
})
export class LogoutModule {}
