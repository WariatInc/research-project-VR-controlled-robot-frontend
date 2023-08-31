export interface Robot {
  id: string;
  name: string;
  availability: string;
  price: string;
}

export interface RobotListResponse {
  list: Robot[];
}
