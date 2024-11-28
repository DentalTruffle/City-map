import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const [location, setLocation] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;

  console.log(process.env.NEXT_PUBLIC_MAP_API_KEY)

  const mapContainerStyle = {
    width: '80%',
    height: '500px', 
  };

  const options = {
    disableDefaultUI: true, 
    zoomControl: true, 
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!location) {
    return <div>Loading...</div>; 
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location} 
        zoom={12} 
        options={options}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}
