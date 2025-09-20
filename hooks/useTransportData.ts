
import { useState, useEffect } from 'react';
import type { Bus, Route } from '../types';
import { getRouteById, initializeBuses, updateBusPositions } from '../services/transportService';
import { SIMULATION_INTERVAL } from '../constants';

const useTransportData = (routeId: string | null) => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [routeDetails, setRouteDetails] = useState<Route | null>(null);

  useEffect(() => {
    if (!routeId) {
      setBuses([]);
      setRouteDetails(null);
      return;
    }

    const route = getRouteById(routeId);
    if (route) {
      setRouteDetails(route);
      setBuses(initializeBuses(route));
    }

    const intervalId = setInterval(() => {
      if (route) {
        setBuses(prevBuses => updateBusPositions(prevBuses, route));
      }
    }, SIMULATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [routeId]);

  return { buses, routeDetails };
};

export default useTransportData;
