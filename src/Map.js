import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Define the bounds for the New York City Tri-state area
const newYorkTriStateBounds = [
 [40.4774, -74.2590], // Southwest corner
 [41.9161, -71.7778] // Northeast corner
];

function Map() {
 return (
    <MapContainer
      bounds={newYorkTriStateBounds}
      style={{ height: "100vh", width: "100%" }}
      zoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Example marker */}
      <Marker position={[40.7128, -74.0060]}>
        <Popup>
          Example Marker
        </Popup>
      </Marker>
    </MapContainer>
 );
}

export default Map;
