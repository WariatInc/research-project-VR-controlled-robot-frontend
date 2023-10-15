import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, ObservableInput } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(
    private router: Router,
    private _snackbar: MatSnackBar,
    private authService: AuthService,
  ) {}
  errorMsg!: string;
  errorCatcher(error: {
    error: { message: any; status: number };
    status: number;
    message: any;
  }): ObservableInput<any> {
    if (error.error instanceof ErrorEvent) {
      this.errorMsg = `Error: ${error.error.message}`;
      console.log(this.errorMsg);
    } else {
      if (error.error.status === 401) {
        this.authService.goToLoginSnackbar();
        return new Observable();
      }
      if (error.status === 401) {
        this.authService.goToLoginSnackbar();
        return new Observable();
      }

      this.errorMsg = `Error: ${error.message}`;
    }

    this._snackbar
      .open(this.errorMsg, 'Strona główna', { duration: 5000 })
      .onAction()
      .subscribe(() => {
        this.router.navigate(['./']).then(this.refresh);
      });

    return new Observable();
  }

  refresh(): void {
    window.location.reload();
  }
}
