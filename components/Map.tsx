'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconUrl,
    iconRetinaUrl,
    shadowUrl
});

export default function Map() {
  return (
        <div className="w-full h-full rounded-lg overflow-hidden">
            <MapContainer
                center={[18.5204, 73.8567]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '100%' }}
                className='h-full w-full'
            >
                <TileLayer
                    attribution='&copy; TransitAlert'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[18.5204, 73.8567]}>
                    <Popup>Pune: Transit Alert Origin</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
