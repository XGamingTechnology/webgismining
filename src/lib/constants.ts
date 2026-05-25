// Constants untuk Asset Tracking System

export const APP_NAME = 'FleetTrack Pro';
export const APP_VERSION = '1.0.0';

// Map configuration
export const DEFAULT_MAP_CENTER: [number, number] = [-6.2088, 106.8456]; // Jakarta
export const DEFAULT_ZOOM = 12;
export const MIN_ZOOM = 3;
export const MAX_ZOOM = 18;

// Map styles (MapLibre compatible)
export const MAP_STYLES = {
  DEMO: 'https://demotiles.maplibre.org/style.json',
  OSM_BRIGHT: 'https://tiles.openfreemap.org/styles/bright',
  LIBERTY: 'https://tiles.openfreemap.org/styles/liberty',
  DARK_MATTER: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
};

export const DEFAULT_MAP_STYLE = MAP_STYLES.DEMO;

// Update intervals (in milliseconds)
export const UPDATE_INTERVALS = {
  POSITION: 5000, // 5 seconds
  STATUS: 10000, // 10 seconds
  ALERTS: 3000, // 3 seconds
};

// Speed limits (km/h)
export const SPEED_LIMITS = {
  CITY: 60,
  HIGHWAY: 80,
  INDUSTRIAL: 40,
};

// Geofence types
export const GEOFENCE_TYPES = {
  SAFE: 'safe',
  RESTRICTED: 'restricted',
  WARNING: 'warning',
} as const;

// Alert types
export const ALERT_TYPES = {
  SPEEDING: 'speeding',
  GEOFENCE_EXIT: 'geofence_exit',
  GEOFENCE_ENTER: 'geofence_enter',
  MAINTENANCE: 'maintenance',
  OFFLINE: 'offline',
} as const;

// Alert severities
export const ALERT_SEVERITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
} as const;

// Asset statuses
export const ASSET_STATUSES = {
  ACTIVE: 'active',
  OFFLINE: 'offline',
  WARNING: 'warning',
  MAINTENANCE: 'maintenance',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'fleetrack_token',
  USER: 'fleetrack_user',
  PREFERENCES: 'fleetrack_preferences',
  LAST_VIEW: 'fleetrack_last_view',
};

// API endpoints (placeholder)
export const API_ENDPOINTS = {
  ASSETS: '/api/assets',
  GEOFENCE: '/api/geofence',
  ALERTS: '/api/alerts',
  REPORTS: '/api/reports',
  AUTH: '/api/auth',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'DD MMMM YYYY',
  DATETIME: 'DD/MM/YYYY HH:mm:ss',
  API: 'YYYY-MM-DD',
  API_DATETIME: 'YYYY-MM-DDTHH:mm:ssZ',
};

// Timezone
export const DEFAULT_TIMEZONE = 'Asia/Jakarta';

// Colors for status indicators
export const STATUS_COLORS = {
  ACTIVE: '#22c55e', // green-500
  OFFLINE: '#6b7280', // gray-500
  WARNING: '#f97316', // orange-500
  MAINTENANCE: '#3b82f6', // blue-500
};

// Colors for severity indicators
export const SEVERITY_COLORS = {
  LOW: '#3b82f6', // blue-500
  MEDIUM: '#eab308', // yellow-500
  HIGH: '#f97316', // orange-500
  CRITICAL: '#ef4444', // red-500
};