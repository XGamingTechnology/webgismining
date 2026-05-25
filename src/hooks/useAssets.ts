'use client';

import { useState, useEffect, useCallback } from 'react';
import { Asset } from '@/types/asset';
import { assets as dummyAssets } from '@/lib/data';

interface UseAssetsReturn {
  assets: Asset[];
  loading: boolean;
  error: string | null;
  selectedAsset: Asset | null;
  setSelectedAsset: (asset: Asset | null) => void;
  filterByStatus: (status: string) => Asset[];
  searchAssets: (query: string) => Asset[];
  refreshAssets: () => Promise<void>;
}

export function useAssets(): UseAssetsReturn {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Load assets
  const loadAssets = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In production, replace with actual API call
      // const response = await fetch('/api/assets');
      // const data = await response.json();
      
      setAssets(dummyAssets);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load assets');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadAssets();
  }, [loadAssets]);

  // Filter assets by status
  const filterByStatus = useCallback((status: string): Asset[] => {
    if (!status || status === 'all') {
      return assets;
    }
    return assets.filter(asset => asset.status === status);
  }, [assets]);

  // Search assets by name or ID
  const searchAssets = useCallback((query: string): Asset[] => {
    if (!query.trim()) {
      return assets;
    }
    const lowerQuery = query.toLowerCase();
    return assets.filter(
      asset =>
        asset.name.toLowerCase().includes(lowerQuery) ||
        asset.id.toLowerCase().includes(lowerQuery) ||
        (asset.driver && asset.driver.toLowerCase().includes(lowerQuery))
    );
  }, [assets]);

  // Refresh assets manually
  const refreshAssets = useCallback(async () => {
    await loadAssets();
  }, [loadAssets]);

  return {
    assets,
    loading,
    error,
    selectedAsset,
    setSelectedAsset,
    filterByStatus,
    searchAssets,
    refreshAssets,
  };
}