import React from 'react';
import type { Bus, Route } from '../types';
import { BUS_SPEED, SIMULATION_INTERVAL } from '../constants';
import BusIcon from './icons/BusIcon';

interface BusInfoPanelProps {
  buses: Bus[];
  route: Route | undefined;
}

const BusInfoPanel: React.FC<BusInfoPanelProps> = ({ buses, route }) => {
  if (!route) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex-grow flex items-center justify-center">
        <p className="text-gray-500">Select a route to see live bus information.</p>
      </div>
    );
  }

  const calculateETASeconds = (bus: Bus): number => {
    const progressToNextStop = 1 - bus.progress;
    const intervalsNeeded = progressToNextStop / BUS_SPEED;
    return (intervalsNeeded * SIMULATION_INTERVAL) / 1000;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
      <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-2">Live Status: {route.name}</h2>
      {buses.length === 0 ? (
        <p className="text-gray-500 mt-4">No buses currently active on this route.</p>
      ) : (
        <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {buses.map(bus => {
            const nextStop = route.stops[bus.nextStopIndex];
            const etaSeconds = calculateETASeconds(bus);
            const isArriving = etaSeconds < 60;
            const etaText = isArriving ? '< 1 min' : `${Math.round(etaSeconds / 60)} min`;

            return (
              <li key={bus.id} className="p-3 bg-gray-50 rounded-lg flex items-center justify-between transition-all hover:shadow-md">
                {/* Left side: Bus ID and Next Stop */}
                <div className="flex-grow">
                    <div className="flex items-center">
                        <BusIcon color={route.color} className="w-6 h-6 mr-3 flex-shrink-0"/>
                        <span className="font-bold text-gray-800">{bus.id.replace('bus-', 'Bus ')}</span>
                    </div>
                    <div className="text-sm text-gray-600 pl-9 mt-1"> {/* Align with bus id */}
                        Next: <span className="font-medium text-gray-800">{nextStop.name}</span>
                    </div>
                </div>
                {/* Right side: ETA */}
                <div className="text-right flex-shrink-0 ml-4">
                    <div className={`text-xl font-bold ${
                      isArriving 
                      ? 'text-green-600 animate-pulse' 
                      : 'text-gray-700'
                    }`}>
                        {etaText}
                    </div>
                    <div className="text-xs text-gray-500">ETA</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BusInfoPanel;