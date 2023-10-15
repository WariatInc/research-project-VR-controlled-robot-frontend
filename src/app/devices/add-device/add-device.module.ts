import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDeviceRoutingModule } from './add-device-routing.module';
import { AddDeviceComponent } from './add-device.component';


@NgModule({
  declarations: [
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    AddDeviceRoutingModule
  ]
})
export class AddDeviceModule { }
