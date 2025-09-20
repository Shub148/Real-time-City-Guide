
import type { Route } from './types';

export const SIMULATION_INTERVAL = 200; // ms
export const BUS_SPEED = 0.02; // progress per interval

export const ROUTES: Route[] = [
  {
    id: 'route-1',
    name: 'Route 101: Downtown Circular',
    color: '#3b82f6', // blue-500
    stops: [
      { id: 's1-1', name: 'Central Station', x: 50, y: 50 },
      { id: 's1-2', name: 'City Hall', x: 250, y: 80 },
      { id: 's1-3', name: 'Main Library', x: 450, y: 50 },
      { id: 's1-4', name: 'Uptown Market', x: 600, y: 200 },
      { id: 's1-5', name: 'Riverfront Park', x: 400, y: 350 },
      { id: 's1-6', name: 'South Bridge', x: 200, y: 320 },
      { id: 's1-7', name: 'Westside Mall', x: 80, y: 200 },
    ],
  },
  {
    id: 'route-2',
    name: 'Route 202: Crosstown Express',
    color: '#10b981', // emerald-500
    stops: [
      { id: 's2-1', name: 'Airport Terminal', x: 50, y: 350 },
      { id: 's2-2', name: 'Tech Park', x: 250, y: 250 },
      { id: 's2-3', name: 'University Campus', x: 450, y: 150 },
      { id: 's2-4', name: 'General Hospital', x: 650, y: 50 },
    ],
  },
  {
    id: 'route-3',
    name: 'Route 303: Suburb Connector',
    color: '#ef4444', // red-500
    stops: [
      { id: 's3-1', name: 'Oakwood Suburb', x: 650, y: 350 },
      { id: 's3-2', name: 'Community College', x: 550, y: 250 },
      { id: 's3-3', name: 'Uptown Market', x: 600, y: 200 },
      { id: 's3-4', name: 'South Bridge', x: 200, y: 320 },
      { id: 's3-5', name: 'Industrial Zone', x: 100, y: 400 },
    ],
  },
];
