import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddDeviceRequest } from '../models/add-device-request';
import { Device } from '../models/device';

let apiUrl = environment.API_URL;
const deviceListUrl = apiUrl + 'streams/';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Device[]> {
    return this.http.get<Device[]>(deviceListUrl);
  }

  addDevice(formData: AddDeviceRequest): Observable<AddDeviceRequest> {
    return this.http.post<AddDeviceRequest>(deviceListUrl, formData);
  }
}
