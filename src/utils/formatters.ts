// Formatter utility functions

/**
 * Format number with thousand separator
 * @param num - Number to format
 * @returns Formatted string with thousand separator
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

/**
 * Format distance with appropriate unit
 * @param meters - Distance in meters
 * @returns Formatted distance string
 */
export function formatDistance(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(2)} km`;
  }
  return `${Math.round(meters)} m`;
}

/**
 * Format speed with unit
 * @param speed - Speed in km/h
 * @returns Formatted speed string
 */
export function formatSpeed(speed: number): string {
  return `${speed.toFixed(0)} km/h`;
}

/**
 * Format fuel level with percentage
 * @param level - Fuel level percentage (0-100)
 * @returns Formatted fuel level string
 */
export function formatFuelLevel(level: number): string {
  return `${level.toFixed(0)}%`;
}

/**
 * Format temperature with unit
 * @param temp - Temperature in Celsius
 * @returns Formatted temperature string
 */
export function formatTemperature(temp: number): string {
  return `${temp.toFixed(0)}°C`;
}

/**
 * Format duration in hours and minutes
 * @param minutes - Duration in minutes
 * @returns Formatted duration string
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  
  if (hours > 0) {
    return `${hours}j ${mins}m`;
  }
  return `${mins}m`;
}

/**
 * Format date to Indonesian locale
 * @param date - Date to format
 * @returns Formatted date string in Indonesian locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Format time to Indonesian locale
 * @param date - Date to format
 * @returns Formatted time string in Indonesian locale
 */
export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(d);
}

/**
 * Format datetime to Indonesian locale
 * @param date - Date to format
 * @returns Formatted datetime string in Indonesian locale
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(d);
}

/**
 * Format currency to Indonesian Rupiah
 * @param amount - Amount in Rupiah
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage
 * @param value - Value to format (0-1)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

/**
 * Capitalize first letter of each word
 * @param text - Text to capitalize
 * @returns Capitalized text
 */
export function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Parse coordinate string to array
 * @param coordString - Coordinate string "lat,lng"
 * @returns Array of [latitude, longitude]
 */
export function parseCoordinate(coordString: string): [number, number] {
  const [lat, lng] = coordString.split(',').map(Number);
  return [lat, lng];
}

/**
 * Format coordinate to string
 * @param coord - Array of [latitude, longitude]
 * @param precision - Decimal precision
 * @returns Formatted coordinate string
 */
export function formatCoordinate(coord: [number, number], precision: number = 4): string {
  return `${coord[0].toFixed(precision)}, ${coord[1].toFixed(precision)}`;
}