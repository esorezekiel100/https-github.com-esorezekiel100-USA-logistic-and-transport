import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { Truck, MapPin } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

// Fix for default Leaflet icons in Vite/React
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Truck Icon using Lucide
const truckIcon = L.divIcon({
  html: renderToStaticMarkup(
    <div className="bg-brand-orange p-2 rounded-full shadow-lg border-2 border-white text-white">
      <Truck size={20} />
    </div>
  ),
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

const originIcon = L.divIcon({
    html: renderToStaticMarkup(
      <div className="bg-brand-blue p-2 rounded-full shadow-lg border-2 border-white text-white">
        <MapPin size={20} />
      </div>
    ),
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });

interface ShipmentMapProps {
  currentPos: [number, number];
  origin: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
}

// Helper to auto-fit bounds
function ChangeView({ bounds }: { bounds: L.LatLngBoundsExpression }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, bounds]);
  return null;
}

export default function ShipmentMap({ currentPos, origin, destination }: ShipmentMapProps) {
  const route: [number, number][] = [
    [origin.lat, origin.lng],
    [currentPos[0], currentPos[1]],
    [destination.lat, destination.lng],
  ];

  const bounds: L.LatLngBoundsExpression = [
    [origin.lat, origin.lng],
    [destination.lat, destination.lng],
  ];

  return (
    <div className="h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-100 relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
      <MapContainer 
        center={currentPos} 
        zoom={6} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ChangeView bounds={bounds} />

        {/* Origin Marker */}
        <Marker position={[origin.lat, origin.lng]} icon={originIcon}>
          <Popup>
            <div className="font-bold">Origin</div>
            <div className="text-xs">{origin.name}</div>
          </Popup>
        </Marker>

        {/* Destination Marker */}
        <Marker position={[destination.lat, destination.lng]} icon={originIcon}>
          <Popup>
            <div className="font-bold">Destination</div>
            <div className="text-xs">{destination.name}</div>
          </Popup>
        </Marker>

        {/* Current Vehicle Position */}
        <Marker position={currentPos} icon={truckIcon}>
          <Popup>
            <div className="font-bold text-brand-orange">Vehicle Location</div>
            <div className="text-xs">Live Update Status</div>
          </Popup>
        </Marker>

        {/* Route Visualization */}
        <Polyline 
            positions={route} 
            color="#E85D04" 
            weight={4} 
            opacity={0.6}
            dashArray="10, 10"
        />
      </MapContainer>
      
      {/* Legend / Overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20">
         <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-blue" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Route Points</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-orange" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">Vehicle</span>
            </div>
         </div>
      </div>
    </div>
  );
}
