'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from "leaflet"
import 'leaflet/dist/leaflet.css';


export default function Map() {
const ICON = icon({
  iconUrl: "../../../mark.png",
  iconSize: [32, 32],
})

    return (
    <MapContainer center={[-26.3553, -52.8495]} zoom={10} style={{ height: '400px', width: '100%', maxWidth: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker icon={ICON} position={[-26.3553, -52.8495]}>
        <Popup>
          São Lourenço do Oeste, SC
        </Popup>
      </Marker>

      <Marker icon={ICON} position={[-26.2292, -52.6704]}>
        <Popup>
          Pato Branco, PR
        </Popup>
      </Marker>
    </MapContainer>
  );
}