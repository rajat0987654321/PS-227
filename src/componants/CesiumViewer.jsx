import React, { useEffect, useRef } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const CesiumViewer = () => {
  const cesiumContainerRef = useRef(null);

  useEffect(() => {
    // ✅ Set your Cesium Ion access token
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MWFkODk5ZC01NjNiLTQyNmUtYmRjMC1jOTI2MWE2OGU4YjgiLCJpZCI6MzUwNDU2LCJpYXQiOjE3NjA0NTU5NDR9.pB_qNDs5Uic3QGy2JQ1RVmgAwCmhV9rvA1--vUeOCUE";

    // ✅ Initialize Cesium Viewer with full UI (includes zoom in/out)
    const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      animation: false, // hide animation timeline
      timeline: false,
      fullscreenButton: true,
      homeButton: true,
      sceneModePicker: true,
      baseLayerPicker: true,
      navigationHelpButton: true,
      geocoder: true, // search bar
      infoBox: true,
      selectionIndicator: true,
    });

    // ✅ Move camera to India
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(78.9629, 22.5937, 2000000),
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-30),
        roll: 0.0,
      },
    });

    // ✅ Define mining areas
    const miningAreas = [
      {
        name: "Kolar Gold Fields",
        coords: [78.134, 12.964, 78.138, 12.968, 78.142, 12.962, 78.137, 12.958],
        height: 30,
      },
      {
        name: "Jharia Coalfields",
        coords: [86.418, 23.784, 86.422, 23.788, 86.428, 23.784, 86.425, 23.780],
        height: 50,
      },
      {
        name: "Bailadila Iron Ore Mine",
        coords: [81.099, 18.73, 81.103, 18.734, 81.107, 18.73, 81.105, 18.726],
        height: 40,
      },
    ];

    // ✅ Add mining polygons + labels
    miningAreas.forEach((area) => {
      const polygonEntity = viewer.entities.add({
        polygon: {
          hierarchy: Cesium.Cartesian3.fromDegreesArray(area.coords),
          material: Cesium.Color.ORANGE.withAlpha(0.6),
          outline: true,
          outlineColor: Cesium.Color.RED,
          height: area.height,
        },
      });

      const centroid = Cesium.BoundingSphere.fromPoints(
        Cesium.Cartesian3.fromDegreesArray(area.coords)
      ).center;

      const volume = (Math.random() * 1000000).toFixed(0); // placeholder for now

      viewer.entities.add({
        position: centroid,
        label: {
          text: `${area.name}\nHeight: ${area.height} m\nEst. Volume: ${volume} m³`,
          font: "14px sans-serif",
          fillColor: Cesium.Color.YELLOW,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        },
      });
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={cesiumContainerRef}
      id="cesiumContainer"
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
};

export default CesiumViewer;

