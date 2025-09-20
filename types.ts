
export interface Coordinate {
  x: number;
  y: number;
}

export interface BusStop extends Coordinate {
  id: string;
  name: string;
}

export interface Route {
  id: string;
  name: string;
  color: string;
  stops: BusStop[];
}

export interface Bus {
  id: string;
  routeId: string;
  currentStopIndex: number;
  nextStopIndex: number;
  progress: number; // 0 to 1 between stops
  position: Coordinate;
}
