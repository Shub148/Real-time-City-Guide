
import React from 'react';
import type { Route } from '../types';

interface RouteSelectorProps {
  routes: Route[];
  selectedRouteId: string | null;
  onSelectRoute: (routeId: string) => void;
}

const RouteSelector: React.FC<RouteSelectorProps> = ({ routes, selectedRouteId, onSelectRoute }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Select a Route</h2>
      <div className="space-y-2">
        {routes.map(route => (
          <button
            key={route.id}
            onClick={() => onSelectRoute(route.id)}
            className={`w-full text-left p-3 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedRouteId === route.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: route.color }}></span>
              <span className="font-medium">{route.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RouteSelector;
