import { Component, OnInit } from '@angular/core';
import { Robot, DeviceListResponse } from './model/device-list-response';
import { DeviceListService } from './service/device-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  public robotList!: DeviceListResponse;
  public loaded: boolean = false;

  constructor(
    private robotListService: DeviceListService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.robotListService.getList().subscribe((robotList) => {
      this.robotList = robotList;
      this.loaded = true;
    });
  }

  public navigateToRobot(id: string): void {
    this.router.navigate(['robot/' + id]);
  }
}
