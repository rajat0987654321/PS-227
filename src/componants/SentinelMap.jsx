import React, { useEffect, useRef } from "react";

const SentinelMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps script dynamically
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXPk1mW-nw3q_c-t__UhTs8EIctb65Z_4&callback=initMap";
    script.async = true;
    window.document.body.appendChild(script);

    // Define the initMap function globally
    window.initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 23.5, lng: 78.5 },
        zoom: 6,
        mapTypeId: "satellite",
      });

      // Load GeoJSON mining zones
      map.data.loadGeoJson("mining_zones.geojson");

      // Optional: Style the mining zones
      map.data.setStyle({
        fillColor: "red",
        strokeColor: "orange",
        strokeWeight: 1.5,
        fillOpacity: 0.4,
      });
    };

    // Cleanup script when unmounting
    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
      style={{
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default SentinelMap;

