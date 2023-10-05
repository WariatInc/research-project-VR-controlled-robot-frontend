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
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.authUser(params['token']);
    });
    this.username = this.authService.username;
  }

  private authUser(token: string): void {
    this.authService.authUser(token);
  }

  public goLogin(): void {
    window.open(
      'http://localhost:8000/api/auth?redirect_uri=http://localhost:4200/',
      '_self',
    );
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
