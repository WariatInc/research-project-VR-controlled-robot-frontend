import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceListResponse } from '../model/device-list-response';
import { Observable } from 'rxjs';
import { ErrorService } from '../../common/service/error.service';

let apiUrl = environment.API_URL;
const deviceListUrl = apiUrl + 'streams/';

@Injectable({
  providedIn: 'root',
})
export class DeviceListService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {}

  getList(): Observable<DeviceListResponse> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.get<DeviceListResponse>(deviceListUrl, options);
  }
}
