// import React, { useEffect, useState } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const AdvancedMap = () => {
//   const [map, setMap] = useState(null);
//   const [showMining, setShowMining] = useState(false);
//   const [time, setTime] = useState("2024-01-01");

//   useEffect(() => {
//     const leafletMap = L.map("map", {
//       center: [23.5, 78.5],
//       zoom: 6,
//     });

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: "© OpenStreetMap contributors",
//     }).addTo(leafletMap);

//     setMap(leafletMap);

//     return () => {
//       leafletMap.remove();
//     };
//   }, []);

//   // Toggle Mining Areas Example Layer
//   useEffect(() => {
//     if (!map) return;
//     let miningLayer;

//     if (showMining) {
//       miningLayer = L.circle([23.5, 78.5], {
//         radius: 50000,
//         color: "red",
//         fillColor: "orange",
//         fillOpacity: 0.5,
//       }).addTo(map);
//     }

//     return () => {
//       if (miningLayer) map.removeLayer(miningLayer);
//     };
//   }, [showMining, map]);

//   const handleBack = () => {
//     window.history.back();
//   };

//   const handleZoomIn = () => map && map.zoomIn();
//   const handleZoomOut = () => map && map.zoomOut();

//   return (
//     <div className="relative h-screen w-full">
//       {/* Map */}
//       <div id="map" className="h-full w-full z-0"></div>

//       {/* Top-left: Back button */}
//       <div className="absolute top-4 left-4 z-10">
//         <button
//           onClick={handleBack}
//           className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
//         >
//           ← Back
//         </button>
//       </div>

//       {/* Bottom-left: Time interval + Mining areas toggle */}
//       <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
//         <label className="bg-white px-3 py-2 rounded-lg shadow flex flex-col text-sm">
//           <span className="font-semibold mb-1">Time Interval</span>
//           <input
//             type="date"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="border rounded px-2 py-1"
//           />
//         </label>

//         <button
//           onClick={() => setShowMining(!showMining)}
//           className={`px-4 py-2 rounded-lg font-semibold shadow ${
//             showMining
//               ? "bg-orange-500 text-white hover:bg-orange-600"
//               : "bg-white text-gray-800 hover:bg-gray-100"
//           }`}
//         >
//           {showMining ? "Hide Mining Areas" : "Show Mining Areas"}
//         </button>
//       </div>

//       {/* Bottom-right: Zoom controls */}
//       <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
//         <button
//           onClick={handleZoomIn}
//           className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//         >
//           +
//         </button>
//         <button
//           onClick={handleZoomOut}
//           className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//         >
//           −
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdvancedMap;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const AdvancedMap = () => {
//   const [zoom, setZoom] = useState(1);
//   const [showMining, setShowMining] = useState(false);
//   const [showInZoom, setShowInZoom] = useState(false);
//   const [timeFrom, setTimeFrom] = useState("2020-08-01");
//   const [timeTo, setTimeTo] = useState("2025-04-01");
//   const [zoomMode, setZoomMode] = useState(false);
//   const [loadingText, setLoadingText] = useState(false);

//   const handleZoomIn = () => setZoom((prev) => prev + 0.2);
//   const handleZoomOut = () => {
//     setZoomMode(false);
//     setShowMining(false);
//     setShowInZoom(false);
//     setZoom(1);
//     setLoadingText(false);
//   };
//   const handleBack = () => window.history.back();

//   const handleShowInZoom = () => {
//     setLoadingText(true);

//     // Simulate buffer/reload
//     setTimeout(() => {
//       setZoomMode(true);
//       setLoadingText(false);
//     }, 1000); // 1 second delay
//   };

//   return (
//     <div
//       className="relative h-screen w-full bg-gray-200 overflow-hidden"
//       style={{
//         backgroundImage: zoomMode
//           ? "url('/src/assets/map2.png')" // new image for zoom mode
//           : "url('/src/assets/mapimage.png')",
//         backgroundSize: `${zoom * 100}%`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         transition: "background-size 0.2s",
//       }}
//     >
//       {/* Top-left: Back button */}
//       <div className="absolute top-4 left-4 z-10">
//         <NavLink
//           to="/Home"
//           onClick={handleBack}
//           className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
//         >
//           ← Back
//         </NavLink>
//       </div>

//       {!zoomMode && (
//         <>
//           {/* Bottom-left: Time interval + Mining areas toggle */}
//           <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
//             <label className="bg-white px-3 py-2 rounded-lg shadow flex flex-col text-sm">
//               <span className="font-semibold mb-1">Time Interval</span>
//               <div className="flex gap-2">
//                 <input
//                   type="date"
//                   value={timeFrom}
//                   onChange={(e) => setTimeFrom(e.target.value)}
//                   className="border rounded px-2 py-1"
//                 />
//                 <span className="px-1 py-1">to</span>
//                 <input
//                   type="date"
//                   value={timeTo}
//                   onChange={(e) => setTimeTo(e.target.value)}
//                   className="border rounded px-2 py-1"
//                 />
//               </div>
//             </label>

//             <button
//               onClick={() => setShowMining(!showMining)}
//               className={`px-4 py-2 rounded-lg font-semibold shadow ${
//                 showMining
//                   ? "bg-orange-500 text-white hover:bg-orange-600"
//                   : "bg-white text-gray-800 hover:bg-gray-100"
//               }`}
//             >
//               {showMining ? "Hide Mining Areas" : "Show Mining Areas"}
//             </button>

//             {/* Show in Zoom button */}
//             {showMining && !showInZoom && (
//               <button
//                 onClick={() => setShowInZoom(true)}
//                 className="px-4 py-2 rounded-lg font-semibold shadow bg-blue-500 text-white hover:bg-blue-600"
//               >
//                 Show in Zoom
//               </button>
//             )}

//             {/* Show in Zoom action */}
//             {showInZoom && !zoomMode && (
//               <button
//                 onClick={handleShowInZoom}
//                 className="px-4 py-2 rounded-lg font-semibold shadow bg-green-500 text-white hover:bg-green-600"
//               >
//                 Show in Zoom
//               </button>
//             )}
//           </div>

//           {/* Mining overlay example */}
//           {showMining && (
//             <div
//               className="absolute bg-orange-500 opacity-50 rounded-full"
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 top: "40%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             ></div>
//           )}
//         </>
//       )}

//       {/* Bottom-right: Zoom controls */}
//       {/* {(!zoomMode || (zoomMode && true)) && (
//         <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
//           {!zoomMode && (
//             <>
//               <button
//                 onClick={handleZoomIn}
//                 className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//               >
//                 +
//               </button>
//             </>
//           )}
//           {zoomMode && (
//             <button
//               onClick={handleZoomOut}
//               className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//             >
//               −
//             </button>
//           )}
//         </div>
//       )} */}


//         <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-20">
//           <button
//               onClick={handleZoomIn}
//               className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//             >
//               +
//             </button>
//             <button
//               onClick={handleZoomOut}
//               className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//             >
//               −
//             </button>
//           </div>


      

//       {/* Loading Text */}
//       {loadingText && (
//         <div className="absolute inset-0 flex items-center justify-center z-20 text-xl font-bold text-black bg-white/70">
//           Buffer or reload...
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdvancedMap;



// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const AdvancedMap = () => {
//   const [zoom, setZoom] = useState(1);
//   const [showMining, setShowMining] = useState(false);
//   const [showImageButton, setShowImageButton] = useState(false);
//   const [timeStart, setTimeStart] = useState("2020-08-01");
//   const [timeEnd, setTimeEnd] = useState("2025-04-01");
//   const [loadingText, setLoadingText] = useState("");
//   const [showOtherImageView, setShowOtherImageView] = useState(false);
//   const [imageSrc, setImageSrc] = useState("/src/assets/mapimage.png");

//   const handleZoomIn = () => setZoom((prev) => prev + 0.2);
//   const handleZoomOut = () => setZoom((prev) => Math.max(0.2, prev - 0.2));
//   const handleBack = () => window.history.back();

//   const handleShowMining = () => {
//     setShowMining(!showMining);
//     setShowImageButton(!showMining); // show "Image" button only when mining is ON
//   };

//   const handleImageClick = () => {
//     setLoadingText("Buffer or reload...");
//     setTimeout(() => {
//       setImageSrc("/src/assets/mapimage2.png"); // replace with your second image
//       setShowOtherImageView(true); // show new buttons
//       setLoadingText("");
//     }, 500); // simulate delay
//   };

//   const handleGoToMap = () => {
//     setShowOtherImageView(false);
//     setShowMining(false);
//     setShowImageButton(false);
//     setImageSrc("/src/assets/Map2.png"); // restore original image
//     setZoom(1);
//     setTimeStart("2020-08-01");
//     setTimeEnd("2025-04-01");
//   };

//   return (
//     <div
//       className="relative h-screen w-full bg-gray-200 overflow-hidden"
//       style={{
//         backgroundImage: `url('${imageSrc}')`,
//         backgroundSize: `${zoom * 100}%`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         transition: "background-size 0.2s",
//       }}
//     >
//       {/* Top-left Back button */}
//       <div className="absolute top-4 left-4 z-20">
//         <NavLink
//           to="/Home"
//           onClick={handleBack}
//           className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
//         >
//           ← Back
//         </NavLink>
//       </div>

//       {/* If in Other Image View Mode */}
//       {showOtherImageView ? (
//         <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
//           <button className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold">
//             Other Mining
//           </button>
//           <button
//             onClick={handleGoToMap}
//             className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
//           >
//             Go to Map
//           </button>
//         </div>
//       ) : (
//         <>
//           {/* Bottom-left: Time interval + Mining toggle + Image button */}
//           <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
//             <div className="bg-white px-3 py-2 rounded-lg shadow flex flex-col text-sm">
//               <span className="font-semibold mb-1">Time Interval</span>
//               <div className="flex gap-1">
//                 <input
//                   type="date"
//                   value={timeStart}
//                   onChange={(e) => setTimeStart(e.target.value)}
//                   className="border rounded px-2 py-1"
//                 />
//                 <span className="px-1">to</span>
//                 <input
//                   type="date"
//                   value={timeEnd}
//                   onChange={(e) => setTimeEnd(e.target.value)}
//                   className="border rounded px-2 py-1"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handleShowMining}
//               className={`px-4 py-2 rounded-lg font-semibold shadow ${
//                 showMining
//                   ? "bg-orange-500 text-white hover:bg-orange-600"
//                   : "bg-white text-gray-800 hover:bg-gray-100"
//               }`}
//             >
//               {showMining ? "Hide Mining Areas" : "Show Mining Areas"}
//             </button>

//             {showImageButton && !showOtherImageView && (
//               <button
//                 onClick={handleImageClick}
//                 className="px-4 py-2 rounded-lg font-semibold shadow bg-blue-500 text-white hover:bg-blue-600"
//               >
//                 Image
//               </button>
//             )}
//           </div>

//           {/* Bottom-right: Zoom controls */}
//           <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-20">
//             <button
//               onClick={handleZoomIn}
//               className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//             >
//               +
//             </button>
//             <button
//               onClick={handleZoomOut}
//               className="bg-white px-3 py-2 rounded-full shadow text-lg hover:bg-gray-100"
//             >
//               −
//             </button>
//           </div>

//           {/* Loading Text */}
//           {loadingText && (
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow text-lg font-semibold z-30">
//               {loadingText}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default AdvancedMap;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdvancedMap = () => {
  const [zoom, setZoom] = useState(1);
  const [showMining, setShowMining] = useState(false);
  const [showImageButton, setShowImageButton] = useState(false);
  const [timeStart, setTimeStart] = useState("2020-08-01");
  const [timeEnd, setTimeEnd] = useState("2025-04-01");
  const [loadingText, setLoadingText] = useState("");
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [imageSrc, setImageSrc] = useState("/src/assets/mapimage.png");

  const handleZoomIn = () => setZoom((prev) => prev + 0.2);
  const handleZoomOut = () => setZoom((prev) => Math.max(0.2, prev - 0.2));
  const handleBack = () => window.history.back();

  const handleShowMining = () => {
    setShowMining(!showMining);
    setShowImageButton(!showMining);
  };

  const handleImageClick = () => {
    setLoadingText("Buffering or reloading...");
    setTimeout(() => {
      setImageSrc("/src/assets/map2.png");
      setShowSecondImage(true);
      setLoadingText("");
    }, 500);
  };

  const handleGoToMap = () => {
    setImageSrc("/src/assets/mapimage.png");
    setShowSecondImage(false);
    setShowMining(false);
    setShowImageButton(false);
    setZoom(1);
    setTimeStart("2020-08-01");
    setTimeEnd("2025-04-01");
  };

  return (
    <div
      className="relative h-screen w-full bg-gray-200 overflow-hidden"
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: `${zoom * 100}%`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.2s",
      }}
    >
      {/* Always show Back button */}
      <div className="absolute top-4 left-4 z-20">
        <NavLink
          to="/Home"
          onClick={handleBack}
          className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
        >
          ← Back
        </NavLink>
      </div>

      {/* If 2nd image is showing → only show “Go to Map” button */}
      {showSecondImage ? (
        <div className="absolute bottom-4 left-4 z-20">
          <button
            onClick={handleGoToMap}
            className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-semibold"
          >
            Go to Map
          </button>
        </div>
      ) : (
        <>
          {/* Bottom-left: controls */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-20">
            {/* Time Interval */}
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

            {/* Mining Toggle */}
            <button
              onClick={handleShowMining}
              className={`px-4 py-2 rounded-lg font-semibold shadow ${
                showMining
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {showMining ? "Hide Mining Areas" : "Show Mining Areas"}
            </button>

            {/* Image Button */}
            {showImageButton && (
              <button
                onClick={handleImageClick}
                className="px-4 py-2 rounded-lg font-semibold shadow bg-blue-500 text-white hover:bg-blue-600"
              >
                Show in Zoom
              </button>
            )}
          </div>

          {/* Zoom Controls */}
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
        </>
      )}

      {/* Loading Text */}
      {loadingText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded shadow text-lg font-semibold z-30 bg-gradient-to-r from-white to-[#ff6200] text-transparent bg-clip-text">
          {loadingText}
        </div>
      )}
    </div>
  );
};

export default AdvancedMap;




