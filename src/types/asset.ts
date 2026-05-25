// Types untuk Asset Tracking System

export interface Asset {
  id: string;
  name: string;
  status: 'active' | 'offline' | 'warning' | 'maintenance';
  coordinates: [number, number]; // [latitude, longitude]
  speed: number; // km/h
  lastUpdate: string;
  driver?: string;
  fuelLevel?: number; // percentage
  temperature?: number; // celsius
  engineStatus?: 'running' | 'stopped';
}

export interface GeofenceZone {
  id: string;
  name: string;
  type: 'safe' | 'restricted' | 'warning';
  coordinates: [number, number];
  radius: number; // meters
  active: boolean;
}

export interface Alert {
  id: string;
  assetId: string;
  type: 'speeding' | 'geofence_exit' | 'geofence_enter' | 'maintenance' | 'offline';
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  acknowledged: boolean;
}

export interface Report {
  id: string;
  type: 'daily' | 'weekly' | 'monthly' | 'custom';
  dateFrom: string;
  dateTo: string;
  assets: string[];
  metrics: {
    totalDistance: number; // km
    averageSpeed: number; // km/h
    maxSpeed: number; // km/h
    idleTime: number; // hours
    fuelConsumption?: number; // liters
  };
  generatedAt: string;
}

export interface DashboardStats {
  totalAssets: number;
  activeAssets: number;
  offlineAssets: number;
  violationsToday: number;
  totalOperationalHours: string;
  stopped30min: number;
}