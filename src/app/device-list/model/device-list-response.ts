export interface Robot {
  id: string;
  name: string;
  description: string;
  location: string;
}

export interface DeviceListResponse {
  list: Robot[];
}
