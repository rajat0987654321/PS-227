import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import parseGeoraster from 'georaster';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import chroma from 'chroma-js';
import proj4 from 'proj4';

// IMPORTANT: Set proj4 globally for georaster to use it
window.proj4 = proj4;

const GeoTiffLayer = ({ url }) => {
  const map = useMap();
  const layerRef = useRef(null);

  useEffect(() => {
    // This is an async IIFE (Immediately Invoked Function Expression)
    // to handle the promise-based logic of fetching and parsing.
    (async () => {
      try {
        // 1. Fetch the GeoTIFF file as an ArrayBuffer
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();

        // 2. Parse the ArrayBuffer into a GeoRaster object
        const georaster = await parseGeoraster(arrayBuffer);

        // 3. Define a color scale (Example: Simple Rainbow Scale)
        const min = georaster.mins[0];
        const max = georaster.maxs[0];
        const range = max - min;
        
        // Create a color scale function using chroma-js
        const scale = chroma.scale('rainbow').domain([min, max]);

        // 4. Create the GeoRasterLayer
        const newLayer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 0.7,
          // Custom function to color each pixel based on its value
          pixelValuesToColorFn: (pixelValues) => {
            const pixelValue = pixelValues[0]; // Assuming single band
            if (pixelValue === 0) return null; // Make null/zero values transparent
            return scale(pixelValue).hex();
          },
          // Adjust resolution for performance/quality tradeoff
          resolution: 256
        });

        // 5. Add the layer to the Leaflet map
        newLayer.addTo(map);
        layerRef.current = newLayer;

        // 6. Center the map on the GeoTIFF's bounds
        map.fitBounds(newLayer.getBounds());

      } catch (error) {
        console.error("Error loading GeoTIFF:", error);
      }
    })();

    // Cleanup function: remove the layer when the component unmounts
    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [map, url]); // Re-run effect if the map instance or URL changes

  return null; // This component doesn't render any DOM elements itself
};

export default GeoTiffLayer;