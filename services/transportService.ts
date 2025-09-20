
import type { Route, Bus, BusStop } from '../types';
import { ROUTES, BUS_SPEED } from '../constants';

export const getRoutes = (): Route[] => {
  return ROUTES;
};

export const getRouteById = (routeId: string): Route | undefined => {
  return ROUTES.find(r => r.id === routeId);
};

export const initializeBuses = (route: Route): Bus[] => {
  const buses: Bus[] = [];
  const numBuses = Math.floor(route.stops.length / 2);
  for (let i = 0; i < numBuses; i++) {
    const startStopIndex = (i * 2) % route.stops.length;
    const nextStopIndex = (startStopIndex + 1) % route.stops.length;
    buses.push({
      id: `bus-${route.id}-${i + 1}`,
      routeId: route.id,
      currentStopIndex: startStopIndex,
      nextStopIndex: nextStopIndex,
      progress: Math.random() * 0.5, // Start at random progress
      position: route.stops[startStopIndex],
    });
  }
  return buses;
};

export const updateBusPositions = (buses: Bus[], route: Route): Bus[] => {
  return buses.map(bus => {
    let { progress, currentStopIndex, nextStopIndex } = bus;
    
    progress += BUS_SPEED;

    if (progress >= 1) {
      progress = 0;
      currentStopIndex = nextStopIndex;
      nextStopIndex = (nextStopIndex + 1) % route.stops.length;
    }

    const currentStop = route.stops[currentStopIndex];
    const nextStop = route.stops[nextStopIndex];

    // Linear interpolation for position
    const position = {
      x: currentStop.x + (nextStop.x - currentStop.x) * progress,
      y: currentStop.y + (nextStop.y - currentStop.y) * progress,
    };

    return { ...bus, progress, currentStopIndex, nextStopIndex, position };
  });
};
