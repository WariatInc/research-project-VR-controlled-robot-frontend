import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './common/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RSWW Travel Agency App';
  username: string | null | undefined;

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {}
  ngOnInit() {
    this.authService.authUser();
    this.username = this.authService.username;
  }

  public goLogin(): void {
    this.authService.login();
  }

  public goAbout(): void {
    this.router.navigate(['./about']);
  }

  public goRobotList(): void {
    this.router.navigate(['./robot-list']);
  }

  public logoutUser(): void {
    this.router.navigate(['./logout']);
  }

  public goHome(): void {
    this.router.navigate(['./']);
  }
}
