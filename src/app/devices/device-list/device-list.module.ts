import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceListRoutingModule } from './device-list-routing.module';
import { DeviceListComponent } from './device-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DeviceListRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class DeviceListModule {}
