// Utility helper functions

/**
 * Calculate distance between two coordinates using Haversine formula
 * @param coord1 - [latitude, longitude]
 * @param coord2 - [latitude, longitude]
 * @returns Distance in kilometers
 */
export function calculateDistance(
  coord1: [number, number],
  coord2: [number, number]
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(coord2[0] - coord1[0]);
  const dLon = toRad(coord2[1] - coord1[1]);
  const lat1 = toRad(coord1[0]);
  const lat2 = toRad(coord2[0]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Check if a coordinate is inside a circle geofence
 * @param coordinate - [latitude, longitude]
 * @param center - [latitude, longitude] of geofence center
 * @param radius - Radius in meters
 * @returns True if inside geofence
 */
export function isInsideGeofence(
  coordinate: [number, number],
  center: [number, number],
  radius: number
): boolean {
  const distance = calculateDistance(coordinate, center);
  return distance * 1000 <= radius; // Convert km to meters
}

/**
 * Format timestamp to relative time string
 * @param timestamp - ISO timestamp or relative string
 * @returns Formatted relative time string
 */
export function formatRelativeTime(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return timestamp; // Return as-is if not a valid date
  }

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Baru saja';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} min lalu`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} jam lalu`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} hari lalu`;
  }
}

/**
 * Get status color class
 * @param status - Asset status
 * @returns Tailwind color class
 */
export function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
      return 'text-green-400 bg-green-500/20 border-green-500';
    case 'warning':
      return 'text-orange-400 bg-orange-500/20 border-orange-500';
    case 'offline':
      return 'text-gray-400 bg-gray-500/20 border-gray-500';
    case 'maintenance':
      return 'text-blue-400 bg-blue-500/20 border-blue-500';
    default:
      return 'text-gray-400 bg-gray-500/20 border-gray-500';
  }
}

/**
 * Get alert severity color class
 * @param severity - Alert severity level
 * @returns Tailwind color class
 */
export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'text-red-400 bg-red-500/20 border-red-500';
    case 'high':
      return 'text-orange-400 bg-orange-500/20 border-orange-500';
    case 'medium':
      return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
    case 'low':
      return 'text-blue-400 bg-blue-500/20 border-blue-500';
    default:
      return 'text-gray-400 bg-gray-500/20 border-gray-500';
  }
}

/**
 * Convert speed from km/h to m/s
 * @param speedKmh - Speed in km/h
 * @returns Speed in m/s
 */
export function kmhToMs(speedKmh: number): number {
  return speedKmh * 0.277778;
}

/**
 * Convert speed from m/s to km/h
 * @param speedMs - Speed in m/s
 * @returns Speed in km/h
 */
export function msToKmh(speedMs: number): number {
  return speedMs * 3.6;
}

/**
 * Generate unique ID
 * @returns Unique ID string
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Debounce function
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}