export interface Device {
  id: string;
  name: string;
  description: string;
  location: string;
}

export interface DeviceListResponse {
  list: Device[];
}
