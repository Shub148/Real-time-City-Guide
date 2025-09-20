import React from 'react';
import type { Bus, Route } from '../types';
import BusIcon from './icons/BusIcon';

interface MapProps {
  route: Route | null;
  buses: Bus[];
}

const Map: React.FC<MapProps> = ({ route, buses }) => {
  const viewBox = "0 0 700 450";

  const getPathData = (route: Route): string => {
    if (route.stops.length < 2) return '';
    const start = `M ${route.stops[0].x} ${route.stops[0].y}`;
    const lines = route.stops.slice(1).map(stop => `L ${stop.x} ${stop.y}`).join(' ');
    // Connect back to the start for circular routes
    const end = `L ${route.stops[0].x} ${route.stops[0].y}`;
    return `${start} ${lines} ${end}`;
  };

  return (
    <svg width="100%" height="100%" viewBox={viewBox} className="bg-gray-800 rounded-lg">
      {!route && (
        <text x="350" y="225" textAnchor="middle" fill="#d1d5db" className="text-xl font-semibold">
          Please select a route to view the map
        </text>
      )}

      {route && (
        <>
          <path
            d={getPathData(route)}
            stroke={route.color}
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            className="opacity-70"
          />
          {route.stops.map(stop => (
             <g key={stop.id}>
                {/* Outer ring for visibility */}
                <circle cx={stop.x} cy={stop.y} r="8" fill={route.color} className="opacity-30" />
                {/* Inner dot representing the stop */}
                <circle cx={stop.x} cy={stop.y} r="4" fill="white" stroke={route.color} strokeWidth="2" />
                <text x={stop.x} y={stop.y - 12} textAnchor="middle" fill="#f3f4f6" className="text-[10px] font-medium pointer-events-none drop-shadow-sm">
                    {stop.name}
                </text>
             </g>
          ))}
          {buses.map(bus => {
            const currentStop = route.stops[bus.currentStopIndex];
            const nextStop = route.stops[bus.nextStopIndex];
            
            const dx = nextStop.x - currentStop.x;
            const dy = nextStop.y - currentStop.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            return (
              <g 
                key={bus.id} 
                transform={`translate(${bus.position.x}, ${bus.position.y}) rotate(${angle})`}
                className="transition-transform duration-100 ease-linear"
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              >
                <g className="drop-shadow-lg">
                    <BusIcon color={route.color} className="w-10 h-5 transform -translate-x-5 -translate-y-2.5" />
                </g>
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
};

export default Map;