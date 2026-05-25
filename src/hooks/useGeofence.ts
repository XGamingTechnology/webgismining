'use client';

import { useState, useEffect, useCallback } from 'react';
import { GeofenceZone } from '@/types/asset';
import { geofenceZones as dummyZones } from '@/lib/data';
import { isInsideGeofence } from '@/utils/helpers';

interface UseGeofenceReturn {
  zones: GeofenceZone[];
  loading: boolean;
  error: string | null;
  selectedZone: GeofenceZone | null;
  setSelectedZone: (zone: GeofenceZone | null) => void;
  addZone: (zone: Omit<GeofenceZone, 'id'>) => void;
  updateZone: (id: string, updates: Partial<GeofenceZone>) => void;
  deleteZone: (id: string) => void;
  checkGeofence: (coordinates: [number, number]) => GeofenceZone[];
  toggleZone: (id: string) => void;
}

export function useGeofence(): UseGeofenceReturn {
  const [zones, setZones] = useState<GeofenceZone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<GeofenceZone | null>(null);

  // Load geofence zones
  const loadZones = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In production, replace with actual API call
      // const response = await fetch('/api/geofence');
      // const data = await response.json();
      
      setZones(dummyZones);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load geofence zones');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadZones();
  }, [loadZones]);

  // Add new zone
  const addZone = useCallback((zone: Omit<GeofenceZone, 'id'>) => {
    const newZone: GeofenceZone = {
      ...zone,
      id: `zone-${Date.now()}`,
    };
    setZones(prev => [...prev, newZone]);
  }, []);

  // Update existing zone
  const updateZone = useCallback((id: string, updates: Partial<GeofenceZone>) => {
    setZones(prev =>
      prev.map(zone => (zone.id === id ? { ...zone, ...updates } : zone))
    );
  }, []);

  // Delete zone
  const deleteZone = useCallback((id: string) => {
    setZones(prev => prev.filter(zone => zone.id !== id));
    if (selectedZone?.id === id) {
      setSelectedZone(null);
    }
  }, [selectedZone]);

  // Toggle zone active status
  const toggleZone = useCallback((id: string) => {
    setZones(prev =>
      prev.map(zone =>
        zone.id === id ? { ...zone, active: !zone.active } : zone
      )
    );
  }, []);

  // Check which geofences contain the given coordinates
  const checkGeofence = useCallback(
    (coordinates: [number, number]): GeofenceZone[] => {
      return zones.filter(
        zone =>
          zone.active &&
          isInsideGeofence(coordinates, zone.coordinates, zone.radius)
      );
    },
    [zones]
  );

  return {
    zones,
    loading,
    error,
    selectedZone,
    setSelectedZone,
    addZone,
    updateZone,
    deleteZone,
    checkGeofence,
    toggleZone,
  };
}