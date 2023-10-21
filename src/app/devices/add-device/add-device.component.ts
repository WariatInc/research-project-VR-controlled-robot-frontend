import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceService } from '../services/device.service';
import { Router } from '@angular/router';
import { AddDeviceRequest } from '../models/add-device-request';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent {
  constructor(
    private deviceService: DeviceService,
    private router: Router,
  ) {}
  newDeviceForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    video_url: new FormControl(''),
    api_url: new FormControl(''),
    secret: new FormControl(''),
  });

  submit(): void {
    const postData: AddDeviceRequest = {
      name: this.newDeviceForm.get('name')?.value!,
      location: this.newDeviceForm.get('location')?.value!,
      description: this.newDeviceForm.get('description')?.value!,
      video_url: this.newDeviceForm.get('video_url')?.value!,
      api_url: this.newDeviceForm.get('api_url')?.value!,
      secret: this.newDeviceForm.get('secret')?.value!,
    };

    this.deviceService.addDevice(postData).subscribe(() => {
      this.router.navigate(['device-list']);
    });
  }
}
