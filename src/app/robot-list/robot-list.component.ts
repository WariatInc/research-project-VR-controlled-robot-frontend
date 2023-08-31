import { Component, OnInit } from '@angular/core';
import { Robot, RobotListResponse } from './model/robot-list-response';
import { RobotListService } from './service/robot-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css'],
})
export class RobotListComponent implements OnInit {
  public robotList!: RobotListResponse;
  public loaded: boolean = false;

  constructor(
    private robotListService: RobotListService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.robotListService.getEvents().subscribe((robotList) => {
      this.robotList = robotList;
      this.loaded = true;
    });
  }

  public navigateToRobot(id: string): void {
    this.router.navigate(['robot/' + id]);
  }
}
