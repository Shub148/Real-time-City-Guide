import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import RouteSelector from './components/RouteSelector';
import BusInfoPanel from './components/BusInfoPanel';
import useTransportData from './hooks/useTransportData';
import { getRoutes } from './services/transportService';
import type { Route } from './types';

const App: React.FC = () => {
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
  const routes = useMemo(() => getRoutes(), []);
  const { buses, routeDetails } = useTransportData(selectedRouteId);

  const selectedRoute: Route | undefined = routes.find(r => r.id === selectedRouteId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/3 flex flex-col gap-4">
          <RouteSelector
            routes={routes}
            selectedRouteId={selectedRouteId}
            onSelectRoute={setSelectedRouteId}
          />
          <BusInfoPanel buses={buses} route={selectedRoute} />
        </div>
        <div className="lg:w-2/3 h-[50vh] lg:h-auto bg-gray-800 rounded-lg shadow-md">
           <Map route={routeDetails} buses={buses} />
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>CityGlide &copy; 2024. Promoting smarter public transport.</p>
      </footer>
    </div>
  );
};

export default App;