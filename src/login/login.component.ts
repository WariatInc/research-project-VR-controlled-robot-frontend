import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/common/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.authService.authToken(params['token']);
    });
    setTimeout(() => {
      const redirectUrl = this.cookieService.get('redirect_url');
      if (redirectUrl) {
        this.cookieService.delete('redirect_url');
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['.']);
      }
    }, 2000);
  }
}
