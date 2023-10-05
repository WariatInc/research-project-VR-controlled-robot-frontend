import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ErrorService } from './error.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

let apiUrl = environment.API_URL;

const sessionUrl = apiUrl + 'api/users/sessions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userIsAuthenticated: boolean = false;
  public redirectUrl: string | undefined;
  private sessionId: string | undefined;
  public username!: string;

  constructor(
    private router: Router,
    private _snackbar: MatSnackBar,
    private http: HttpClient,
    private cookieService: CookieService,
  ) {}

  logout(): void {
    this.userIsAuthenticated = false;
    this.username = '';
    this.cookieService.deleteAll();
  }

  authUser(token: string): void {
    if (!this.userIsAuthenticated) {
      const username = this.cookieService.get('username');
      if (username !== undefined) {
        this.userIsAuthenticated = true;
        this.username = username;
      }
    }
    if (token !== undefined) {
      const decodedToken = atob(token);
      const jsonToken = JSON.parse(decodedToken);
      const id_token = jsonToken['id_token'];
      const username = jsonToken['userinfo']['name'];
      this.username = username;
      this.cookieService.set('id_token', id_token);
      this.cookieService.set('username', username);
      this.userIsAuthenticated = true;
    }
  }

  doIfUserLoggedIn(callback: () => void, redirectUrl: string = ''): void {
    if (this.userIsAuthenticated) {
      callback();
    } else {
      this.redirectUrl = redirectUrl;
      this.goToLoginSnackbar();
    }
  }

  goToLoginSnackbar(): void {
    this._snackbar
      .open('Żeby to zrobić musisz się zalogować', 'OK')
      .onAction()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
