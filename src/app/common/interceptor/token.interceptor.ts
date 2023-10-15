import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { catchError, mergeMap, Observable, tap, BehaviorSubject } from 'rxjs';
import { ErrorService } from '../service/error.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.getToken().pipe(
      mergeMap((token) => {
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        });

        return next.handle(request).pipe(
          tap((evt) => {
            // modify here
          }),
          catchError((error: any) => {
            return this.errorService.errorCatcher(error);
          }),
        );
      }),
    );
  }

  getToken() {
    if (this.authService.userIsAuthenticated) {
      this.token = new BehaviorSubject<string>(this.authService.getUserToken());
      return this.token.asObservable();
    } else return this.token.asObservable();
  }
}
