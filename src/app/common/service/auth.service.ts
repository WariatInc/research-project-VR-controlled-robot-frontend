import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

let apiUrl = environment.API_URL;
let frontUrl = environment.FRONT_URL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userIsAuthenticated: boolean = false;
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
    this.cookieService.deleteAll('/', '');
    this.router.navigate(['.']);
  }

  authToken(token: string): void {
    if (token !== undefined) {
      const decodedToken = atob(token);
      const jsonToken = JSON.parse(decodedToken);
      const id_token = jsonToken['id_token'];
      const username = jsonToken['userinfo']['name'];
      this.username = username;
      this.cookieService.set('id_token', id_token, 10, '/', '', true, 'None');
      this.cookieService.set('username', username, 10, '/', '', true, 'None');
      this.userIsAuthenticated = true;
    }
  }

  login(): void {
    window.open(apiUrl + 'auth?redirect_uri=' + frontUrl + '/login/', '_self');
  }

  authUser(): void {
    if (!this.userIsAuthenticated) {
      const username = this.cookieService.get('username');
      if (username.length > 1) {
        this.userIsAuthenticated = true;
        this.username = username;
      }
    }
  }

  goToLoginSnackbar(): void {
    this._snackbar
      .open('Żeby to zrobić musisz się zalogować', 'OK')
      .onAction()
      .subscribe(() => {
        this.login();
      });
  }

  getUserToken(): string {
    return this.cookieService.get('id_token');
  }
}
