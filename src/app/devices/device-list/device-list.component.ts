import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Router } from '@angular/router';
import { Device } from '../models/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  public deviceList!: Device[];
  public loaded: boolean = false;

  constructor(
    private deviceListService: DeviceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.deviceListService.getList().subscribe((deviceList) => {
      this.deviceList = deviceList;
      this.loaded = true;
    });
  }

  public navigateToRobot(id: string): void {
    this.router.navigate(['device/' + id]);
  }
}
