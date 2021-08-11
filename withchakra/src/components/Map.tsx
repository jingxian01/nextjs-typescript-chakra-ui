import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LatLngExpression } from "leaflet";

interface MapProps {
  pos: LatLngExpression;
  setPos: (pos: LatLngExpression) => void;
}

const Map: React.FC<MapProps> = ({ pos, setPos }) => {
  const Markers = () => {
    useMapEvents({
      click(e) {
        setPos(e.latlng);
      },
    });
    return pos === null ? null : (
      <Marker position={pos}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </MapContainer>
  );
};

export default Map;
