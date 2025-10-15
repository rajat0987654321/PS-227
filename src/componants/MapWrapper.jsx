import { MapContainer, TileLayer } from 'react-leaflet';
import GeoTiffLayer from './GeoTiffLayer'; // Adjust path

// You need to ensure your TIFF file is accessible via a public URL,
// or placed in your React app's public directory.
const GEOTIFF_URL = '/data/your_map.tif'; 

const MapWrapper = () => {
  // Set initial position/zoom for a decent view while the TIFF loads
  const initialPosition = [30, 0]; // Example starting center
  const initialZoom = 2;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer 
        center={initialPosition} 
        zoom={initialZoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        {/* Base Map Layer */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Your GeoTIFF Layer */}
        <GeoTiffLayer url={'./assets/Mining_result'} />
      </MapContainer>
    </div>
  );
};

export default MapWrapper;