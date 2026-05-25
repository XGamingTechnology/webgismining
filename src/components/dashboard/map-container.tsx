"use client";

import { useState } from "react";
import { Map, Marker, Popup, NavigationControl, GeolocateControl, FullscreenControl, ScaleControl, Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Truck } from "lucide-react";

// Type untuk viewport
type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
};

// Dummy Data Assets
const assets = [
  {
    id: "TRK-001",
    name: "Truck_07",
    status: "active",
    coordinates: [-6.2088, 106.8456] as [number, number],
    speed: 42,
    lastUpdate: "2 min lalu",
  },
  {
    id: "TRK-002",
    name: "Truck_12",
    status: "offline",
    coordinates: [-6.22, 106.86] as [number, number],
    speed: 0,
    lastUpdate: "15 min lalu",
  },
  {
    id: "TRK-003",
    name: "Truck_05",
    status: "warning",
    coordinates: [-6.195, 106.83] as [number, number],
    speed: 65,
    lastUpdate: "1 min lalu",
  },
];

// Dummy Geofence Zones (GeoJSON Format)
const geofenceZones = {
  type: "FeatureCollection" as const,
  features: [
    {
      type: "Feature" as const,
      properties: { name: "Zona Aman", type: "safe" },
      geometry: {
        type: "Circle" as const,
        coordinates: [106.816666, -6.2],
        radius: 2000,
      },
    } as any,
    {
      type: "Feature" as const,
      properties: { name: "Zona Restriksi", type: "restricted" },
      geometry: {
        type: "Circle" as const,
        coordinates: [106.86, -6.22],
        radius: 1500,
      },
    } as any,
  ],
};

export default function MapContainerComponent() {
  const [viewport, setViewport] = useState<Viewport>({
    latitude: -6.2088,
    longitude: 106.8456,
    zoom: 12,
  });

  const [selectedAsset, setSelectedAsset] = useState<(typeof assets)[0] | null>(null);

  // 🗺️ MapLibre Style - Gratis & Open Source
  // Pilihan style:
  // - Demo: 'https://demotiles.maplibre.org/style.json'
  // - OSM Bright: 'https://tiles.openfreemap.org/styles/bright'
  // - Dark: 'https://tiles.openfreemap.org/styles/liberty'
  // - Satellite (pakai MapTiler/other provider)
  const MAP_STYLE = "https://demotiles.maplibre.org/style.json";

  return (
    <Map
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle={MAP_STYLE}
      // ❌ Tidak perlu mapboxAccessToken lagi! 🎉
      interactiveLayerIds={["assets-layer"]}
    >
      {/* Controls: Zoom, Compass, Fullscreen, Location */}
      <NavigationControl position="top-right" showCompass={true} />
      <GeolocateControl position="top-right" />
      <FullscreenControl position="top-right" />
      <ScaleControl position="bottom-left" />

      {/* Layer Geofence Zones */}
      <Source id="geofence" type="geojson" data={geofenceZones as any}>
        {/* Zona Aman - Hijau */}
        <Layer
          id="safe-zone"
          type="circle"
          paint={{
            "circle-radius": ["get", "radius"],
            "circle-color": "#22c55e",
            "circle-opacity": 0.15,
            "circle-stroke-color": "#22c55e",
            "circle-stroke-width": 2,
          }}
          filter={["==", ["get", "type"], "safe"]}
        />
        {/* Zona Restriksi - Merah */}
        <Layer
          id="restricted-zone"
          type="circle"
          paint={{
            "circle-radius": ["get", "radius"],
            "circle-color": "#ef4444",
            "circle-opacity": 0.2,
            "circle-stroke-color": "#ef4444",
            "circle-stroke-width": 2,
          }}
          filter={["==", ["get", "type"], "restricted"]}
        />
      </Source>

      {/* Markers untuk Assets */}
      {assets.map((asset) => (
        <Marker
          key={asset.id}
          latitude={asset.coordinates[0]}
          longitude={asset.coordinates[1]}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedAsset(asset);
          }}
        >
          <div className={`cursor-pointer transition-transform hover:scale-110 ${asset.status === "active" ? "text-green-400" : asset.status === "warning" ? "text-orange-400" : "text-gray-400"}`}>
            <Truck className="w-6 h-6 drop-shadow-lg" />
            {/* Status indicator dot */}
            <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${asset.status === "active" ? "bg-green-500" : asset.status === "warning" ? "bg-orange-500" : "bg-gray-500"}`} />
          </div>
        </Marker>
      ))}

      {/* Popup Detail Asset */}
      {selectedAsset && (
        <Popup latitude={selectedAsset.coordinates[0]} longitude={selectedAsset.coordinates[1]} anchor="top" onClose={() => setSelectedAsset(null)} closeOnClick={false} className="!shadow-2xl">
          <div className="w-56 p-2 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-white">{selectedAsset.name}</h4>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedAsset.status === "active" ? "bg-green-500/20 text-green-400" : selectedAsset.status === "warning" ? "bg-orange-500/20 text-orange-400" : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {selectedAsset.status.toUpperCase()}
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Kecepatan</span>
                <span className="font-mono">{selectedAsset.speed} km/jam</span>
              </div>
              <div className="flex justify-between">
                <span>Terakhir Update</span>
                <span>{selectedAsset.lastUpdate}</span>
              </div>
              <div className="flex justify-between">
                <span>Coordinates</span>
                <span className="font-mono text-[10px]">
                  {selectedAsset.coordinates[0].toFixed(4)}, {selectedAsset.coordinates[1].toFixed(4)}
                </span>
              </div>
            </div>
            <button className="w-full mt-3 text-xs bg-green-600 hover:bg-green-700 text-white py-1.5 rounded transition">Lihat Detail</button>
          </div>
        </Popup>
      )}

      {/* Legend / Layer Control */}
      <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur p-3 rounded-lg border border-gray-700 text-xs space-y-2 z-10">
        <p className="font-semibold text-gray-200 mb-1">Legend</p>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-300">Aktif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-gray-300">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-500" />
          <span className="text-gray-300">Offline</span>
        </div>
        <div className="pt-2 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500/20" />
            <span className="text-gray-300">Zona Aman</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-red-500 bg-red-500/20" />
            <span className="text-gray-300">Zona Restriksi</span>
          </div>
        </div>
      </div>
    </Map>
  );
}
