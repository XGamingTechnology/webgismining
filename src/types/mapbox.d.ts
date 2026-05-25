// MapLibre GL type declarations

declare module 'react-map-gl' {
  import { ComponentType, ReactNode } from 'react';
  import { MapProps, MarkerProps, PopupProps, LayerProps, SourceProps } from 'react-map-gl';

  export interface NavigationControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    showCompass?: boolean;
    showZoom?: boolean;
    visualizePitch?: boolean;
  }

  export interface GeolocateControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    positionOptions?: {
      enableHighAccuracy: boolean;
      timeout?: number;
      maximumAge?: number;
    };
    fitBoundsOptions?: {
      padding?: number;
      duration?: number;
    };
    trackUserLocation?: boolean;
    showUserHeading?: boolean;
  }

  export interface FullscreenControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }

  export interface ScaleControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    maxWidth?: number;
    unit?: 'imperial' | 'metric' | 'nautical';
  }

  export const Map: ComponentType<MapProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Popup: ComponentType<PopupProps>;
  export const NavigationControl: ComponentType<NavigationControlProps>;
  export const GeolocateControl: ComponentType<GeolocateControlProps>;
  export const FullscreenControl: ComponentType<FullscreenControlProps>;
  export const ScaleControl: ComponentType<ScaleControlProps>;
  export const Source: ComponentType<SourceProps>;
  export const Layer: ComponentType<LayerProps>;

  export { MapProps, MarkerProps, PopupProps, LayerProps, SourceProps };
}

declare module 'maplibre-gl' {
  export * from 'maplibre-gl/dist/maplibre-gl';
}