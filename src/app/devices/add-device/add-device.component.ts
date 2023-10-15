import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css'],
})
export class AddDeviceComponent {
  newDeviceForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    video_url: new FormControl(''),
    api_url: new FormControl(''),
    secret: new FormControl(''),
  });
}
