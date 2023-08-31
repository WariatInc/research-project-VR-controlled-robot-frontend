import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RobotListResponse } from '../model/robot-list-response';
import { catchError, Observable } from 'rxjs';
import { ErrorService } from '../../common/service/error.service';

let apiUrl = environment.API_URL;
const robotListUrl = apiUrl + 'robot-list/';

@Injectable({
  providedIn: 'root',
})
export class RobotListService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}

  getEvents(): Observable<RobotListResponse> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.get<RobotListResponse>(robotListUrl, options).pipe(
      catchError((error) => {
        return this.errorService.errorCatcher(error);
      }),
    );
  }
}
