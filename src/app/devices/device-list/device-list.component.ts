import { Component, OnInit } from '@angular/core';
import { DeviceListResponse } from './model/device-list-response';
import { DeviceListService } from './service/device-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  public deviceList!: DeviceListResponse;
  public loaded: boolean = false;

  constructor(
    private deviceListService: DeviceListService,
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
