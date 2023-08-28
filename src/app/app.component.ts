import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.authUser();
  }

  private authUser(): void {
    this.authService.userIsAuth();
    this.username = localStorage.getItem('token');
  }

  public goLogin(): void {
    this.router.navigate(['./login']);
  }

  public goAbout(): void {
    this.router.navigate(['./about']);
  }

  public goReservationList(): void {
    this.router.navigate(['./robot-list']);
  }

  public goEventDashboard(): void {
    this.router.navigate(['./event-dashboard']);
  }

  public logoutUser(): void {
    this.authService.logout();
    this.router.navigate(['./']);
  }

  public goHome(): void {
    this.router.navigate(['./']);
  }
}
