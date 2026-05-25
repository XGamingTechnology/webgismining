// Data dummy untuk Asset Tracking System

import { Asset, GeofenceZone, Alert, Report, DashboardStats } from '@/types/asset';

// Dummy Assets Data
export const assets: Asset[] = [
  {
    id: 'TRK-001',
    name: 'Truck_07',
    status: 'active',
    coordinates: [-6.2088, 106.8456],
    speed: 42,
    lastUpdate: '2 min lalu',
    driver: 'Ahmad Rizki',
    fuelLevel: 78,
    temperature: 85,
    engineStatus: 'running',
  },
  {
    id: 'TRK-002',
    name: 'Truck_12',
    status: 'offline',
    coordinates: [-6.22, 106.86],
    speed: 0,
    lastUpdate: '15 min lalu',
    driver: 'Budi Santoso',
    fuelLevel: 45,
    temperature: 72,
    engineStatus: 'stopped',
  },
  {
    id: 'TRK-003',
    name: 'Truck_05',
    status: 'warning',
    coordinates: [-6.195, 106.83],
    speed: 65,
    lastUpdate: '1 min lalu',
    driver: 'Citra Dewi',
    fuelLevel: 92,
    temperature: 95,
    engineStatus: 'running',
  },
  {
    id: 'TRK-004',
    name: 'Van_03',
    status: 'active',
    coordinates: [-6.215, 106.85],
    speed: 38,
    lastUpdate: '30 detik lalu',
    driver: 'Dedi Kurniawan',
    fuelLevel: 65,
    temperature: 80,
    engineStatus: 'running',
  },
  {
    id: 'TRK-005',
    name: 'Truck_09',
    status: 'maintenance',
    coordinates: [-6.2, 106.84],
    speed: 0,
    lastUpdate: '2 jam lalu',
    driver: 'Eko Prasetyo',
    fuelLevel: 30,
    temperature: 68,
    engineStatus: 'stopped',
  },
];

// Dummy Geofence Zones
export const geofenceZones: GeofenceZone[] = [
  {
    id: 'zone-001',
    name: 'Zona Aman - Jakarta Pusat',
    type: 'safe',
    coordinates: [-6.2, 106.816666],
    radius: 2000,
    active: true,
  },
  {
    id: 'zone-002',
    name: 'Zona Restriksi - Bandara',
    type: 'restricted',
    coordinates: [-6.22, 106.86],
    radius: 1500,
    active: true,
  },
  {
    id: 'zone-003',
    name: 'Zona Warning - Pelabuhan',
    type: 'warning',
    coordinates: [-6.195, 106.83],
    radius: 1000,
    active: true,
  },
];

// Dummy Alerts
export const alerts: Alert[] = [
  {
    id: 'alert-001',
    assetId: 'TRK-003',
    type: 'speeding',
    message: 'Kecepatan melebihi batas (65 km/h di zona 60 km/h)',
    timestamp: '5 min lalu',
    severity: 'medium',
    acknowledged: false,
  },
  {
    id: 'alert-002',
    assetId: 'TRK-002',
    type: 'geofence_exit',
    message: 'Keluar dari Zona Aman tanpa izin',
    timestamp: '15 min lalu',
    severity: 'high',
    acknowledged: false,
  },
  {
    id: 'alert-003',
    assetId: 'TRK-005',
    type: 'maintenance',
    message: 'Jadwal maintenance rutin',
    timestamp: '2 jam lalu',
    severity: 'low',
    acknowledged: true,
  },
  {
    id: 'alert-004',
    assetId: 'TRK-001',
    type: 'geofence_enter',
    message: 'Masuk ke Zona Restriksi',
    timestamp: '10 min lalu',
    severity: 'medium',
    acknowledged: true,
  },
];

// Dummy Reports
export const reports: Report[] = [
  {
    id: 'report-001',
    type: 'daily',
    dateFrom: '2025-01-15',
    dateTo: '2025-01-15',
    assets: ['TRK-001', 'TRK-002', 'TRK-003'],
    metrics: {
      totalDistance: 458.5,
      averageSpeed: 45,
      maxSpeed: 78,
      idleTime: 2.5,
      fuelConsumption: 125,
    },
    generatedAt: '2025-01-15 23:59:59',
  },
  {
    id: 'report-002',
    type: 'weekly',
    dateFrom: '2025-01-08',
    dateTo: '2025-01-14',
    assets: ['TRK-001', 'TRK-002', 'TRK-003', 'TRK-004'],
    metrics: {
      totalDistance: 2845.2,
      averageSpeed: 42,
      maxSpeed: 85,
      idleTime: 18.5,
      fuelConsumption: 780,
    },
    generatedAt: '2025-01-14 23:59:59',
  },
];

// Dashboard Statistics
export const dashboardStats: DashboardStats = {
  totalAssets: 58,
  activeAssets: 49,
  offlineAssets: 9,
  violationsToday: 5,
  totalOperationalHours: '128h 45m',
  stopped30min: 7,
};