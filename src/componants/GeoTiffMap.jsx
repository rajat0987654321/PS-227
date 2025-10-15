import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const GeoTiffMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(6);
  const [showMining, setShowMining] = useState(false);
  const [showImageButton, setShowImageButton] = useState(false);
  const [timeStart, setTimeStart] = useState("2020-08-01");
  const [timeEnd, setTimeEnd] = useState("2025-04-01");
  const [loadingText, setLoadingText] = useState("");
  const [showOtherImageView, setShowOtherImageView] = useState(false);
  const [imageSrc, setImageSrc] = useState("/src/assets/mapimage2.png"); // image for Image button

  // Dynamically load Google Maps API
  useEffect(() => {
    if (window.google && window.google.maps) return; // already loaded

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAXPk1mW-nw3q_c-t__UhTs8EIctb65Z_4&callback=initMap`; // replace with your key
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initializeMap();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize Google Map
  const initializeMap = () => {
    if (!mapRef.current) return;

    const googleMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 23.5, lng: 78.5 },
      zoom: zoom,
      mapTypeId: "satellite",
      disableDefaultUI: true,
    });

    setMap(googleMap);
  };

  // Update zoom
  useEffect(() => {
    if (map) {
      map.setZoom(zoom);
    }
  }, [zoom, map]);

  // Plot mining areas as circles
  useEffect(() => {
    if (!map) return;
    let circles = [];

    if (showMining) {
      const miningCoords = [
        { lat: 23.5, lng: 78.5, radius: 50000 },
        { lat: 24.0, lng: 79.0, radius: 40000 },
        { lat: 23.0, lng: 77.5, radius: 30000 },
      ];

      miningCoords.forEach((coord) => {
        const circle = new window.google.maps.Circle({
          strokeColor: "#FF6600",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FFA500",
          fillOpacity: 0.5,
          map: map,
          center: { lat: coord.lat, lng: coord.lng },
          radius: coord.radius,
        });
        circles.push(circle);
      });
    }

    return () => {
      circles.forEach((c) => c.setMap(null));
    };
  }, [showMining, map]);

  const handleZoomIn = () => setZoom((prev) => prev + 1);
  const handleZoomOut = () => setZoom((prev) => Math.max(1, prev - 1));
  const handleBack = () => window.history.back();

  const handleShowMining = () => {
    setShowMining(!showMining);
    setShowImageButton(!showMining);
  };

  const handleImageClick = () => {
    setLoadingText("Buffer or reload...");
    setTimeout(() => {
      setShowOtherImageView(true);
      setLoadingText("");
    }, 1000);
  };

  const handleGoToMap = () => {
    setShowOtherImageView(false);
    setShowMining(false);
    setShowImageButton(false);
    setZoom(6);
  };

  return (
    <div className="relative h-screen w-full">
      {/* Google Map */}
      {!showOtherImageView && <div ref={mapRef} className="absolute top-0 left-0 w-full h-full z-0"></div>}

      {/* Image overlay after Image button click */}
      {showOtherImageView && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      )}

      {/* Top-left Back button */}
      <div className="absolute top-4 left-4 z-20">
        <NavLink
          to="/Home"
          onClick={handleBack}
          className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
        >
          ← Back
        </NavLink>
      </div>

      {/* Bottom-left controls */}
      {!showOtherImageView ? (
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
          <div className="bg-white px-3 py-2 rounded-lg shadow flex flex-col text-sm">
            <span className="font-semibold mb-1">Time Interval</span>
            <div className="flex gap-1">
              <input
                type="date"
                value={timeStart}
                onChange={(e) => setTimeStart(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <span className="px-1">to</span>
              <input
                type="date"
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          </div>

          <button
            onClick={handleShowMining}
            className={`px-4 py-2 rounded-lg font-semibold shadow ${
              showMining ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {showMining ? "Hide Mining Areas" : "Show Mining Areas"}
          </button>

          {showImageButton && (
            <button
              onClick={handleImageClick}
              className="px-4 py-2 rounded-lg font-semibold shadow bg-blue-500 text-white hover:bg-blue-600"
            >
              Image
            </button>
          )}
        </div>
      ) : (
        <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
          <button className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold">
            Other Mining
          </button>
          <button
            onClick={handleGoToMap}
            className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
          >
            Go to Map
          </button>
        </div>
      )}

      {/* Bottom-right Zoom controls */}
      {!showOtherImageView && (
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={handleZoomIn}
            className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
          >
            −
          </button>
        </div>
      )}

      {/* Loading text */}
      {loadingText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow text-lg font-semibold z-30">
          {loadingText}
        </div>
      )}
    </div>
  );
};

export default GeoTiffMap;

