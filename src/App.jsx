import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import GradientText from './componants/GradientText.jsx'
import TextType from './componants/TextType.jsx';
import Navber from "./Pages/Navber.jsx";
import Footer from "./Pages/Footer";
import Button from "./componants/Button";
import backgroundImg from "./assets/BackgroundImage.avif";
import DashboardSection from "./componants/DashboardSection";
import SentinelMap from "./componants/SentinelMap.jsx";
import AnalysisTools from "./componants/AnalysisTools.jsx";
import SecureData from "./componants/SecureData.jsx";
import HeroSection from "./Pages/HeroSection.jsx";
import Home from "./Pages/Home.jsx";
import GeoTiffMap from "./componants/GeoTiffMap.jsx";
import MapWrapper from "./componants/MapWrapper.jsx";
import ImageMap from "./componants/ImageMap.jsx";
import AdvancedMap from "./componants/AdvancedMap.jsx";
import Contact from "./componants/Contact.jsx";
import CesiumViewer from "./componants/CesiumViewer.jsx";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AnalysisTools" element={<AnalysisTools/>} />
      <Route path="/DashboardSection" element={<DashboardSection/>} />
      <Route path="/SecureData" element={<SecureData/>} />
      <Route path="/SentinelMap" element={<SentinelMap/>} />
      <Route path="/GeotiffMap" element={<GeoTiffMap/>} />
      <Route path="/MapWrapper" element={<MapWrapper/>} />
      <Route path="/ImageMap" element={<ImageMap/>} />
      <Route path="/AdvancedMap" element={<AdvancedMap/>} />
      <Route path="/contact" element={<contact/>} />
      <Route path="/3Dview" element={<CesiumViewer/>} />


    </Routes>

    {/* <div className="flex flex-col min-h-screen justify-between bg-background text-foreground">
      <main className="flex-1  "> */}
        {/* <Navber />------------------------------------------------------------------------------------------------------- */}
        {/* <Routes>
          <Route path="/DashboardSection" element={<DashboardSection/>} />
        </Routes> */}
        {/* Hero Section */}
       {/* <HeroSection/>------------------------------------------------------------------------------------------------ */}

        {/* DashboardSection */}
        {/* <DashboardSection/> */}

        {/* Features Section */}
        {/* <section id="features" className=" flex items-center justify-center section-dark py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={1.5}
  showBorder={false}
  className="custom-class"
>
  Secure Data Storage
</GradientText>
</h2>
            <p className="mt-4 text-foreground/70">
              Advanced blockchain-based storage for mining data and analytics
            </p>
            <div className="grid gap-20 mt-12 md:grid-cols-3">
              {[["Blockchain Security","All mining data is stored on a secure, immutable blockchain to ensure data integrity and prevent tampering."], ["Cloud Storage","Scalable cloud infrastructure to store petabytes of satellite imagery, sensor data, and analysis results."],["Data Encryption","Military-grade encryption for all stored data, ensuring privacy and protection against unauthorized access."]].map((title) => (
                <div
                  key={title}
                  className="p-6 border group rounded-xl bg-card shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.2)] transition-shadow duration-400  hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)] "
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20" />
                  <h3 className="mt-4 text-lg font-semibold">{title[0]}</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    {title[1]}
                  </p>
                  <div className="w-0 h-1 mt-4 transition-all duration-300 rounded bg-primary group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </section> */}
         {/* Analysis Tools section */}
          {/* <section id="features" className=" flex items-center justify-center section-dark py-24"> */}
        {/* <AnalysisTools/>-------------------------------------------------------------------------------------------- */}
        {/* </section> */}

{/* <DashboardSection/>=============================================================================================== */}
        {/* Global Map */}
        {/* <section id="map" className="flex items-center justify-center relative py-24 overflow-hidden section-dark"> */}
          {/* <div className="container"> */}
            {/* <div className="max-w-3xl mx-auto text-center"> */}
              {/* <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Global footprint</h2> */}
              {/* <p className="mt-4 text-foreground/70">Deploy anywhere. Our pipeline processes petabytes of imagery and delivers crisp insights.</p> */}
             {/* <SentinelMap /> */}
            {/* </div> */}
            {/* <div className="p-6 border map-dots mt-14 rounded-xl bg-background" /> */}
          {/* </div> */}
        {/* </section> */}

        {/* Product Section */}
        {/* <section id="product" className="flex items-center justify-center section-dark py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Secure Data Storage</h2>
            <p className="mt-4 text-foreground/70">
              Advanced blockchain-based storage for mining data and analytics
            </p>
          <div className="container grid gap-6 md:grid-cols-4">
            {[["Depth Analyzer","Calculates excavation depth using DEM differencing (Simpson's method) with high precision."],["Volume Calculator","Estimates total removed material from detected mining sites using advanced volumetric analysis."],["Predictive Analytics"," "],["Dynamic Eco-Impact Map",""]].map((item) => (
              <article
                key={item}
                className="relative p-6 overflow-hidden border shadow-sm group rounded-xl bg-card"
              >
                <div className="absolute inset-0 transition-opacity opacity-0 -z-10 bg-gradient-to-tr from-primary/5 to-fuchsia-500/5 group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{item[0]}</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {item[1]}
                </p>
                <div className="mt-6 aspect-[16/10] rounded-lg border bg-muted/40" />
              </article>
            ))}
          </div>
        </section> */}
        {/* Analysis Tools */}
         {/* <section id="features" className=" flex items-center justify-center section-dark py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
               <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={1.5}
  showBorder={false}
  className="custom-class"
>
        Analysis Tools
</GradientText>
              </h2>
            <p className="mt-4 text-foreground/70">

              Comprehensive suite of tools for in-depth mining analysis and monitoring
            </p>
            <div className="grid gap-20 mt-12 md:grid-cols-4">
              {[["Depth Analyzer","Calculates excavation depth using DEM differencing (Simpson's method) with high precision."],["Volume Calculator","Estimates total removed material from detected mining sites using advanced volumetric analysis."],["Predictive Analytics"," "],["Dynamic Eco-Impact Map",""]].map((title) => (
                <div
                  key={title}
                  className="p-6  border group rounded-xl bg-card  shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.2)] transition-shadow duration-400 hover:scale-105 hover:shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.6)]"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20" />
                  <h3 className="mt-4 text-lg font-semibold">{title[0]}</h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    {title[1]}
                  </p>
                  <div className="w-0 h-1 mt-4 transition-all duration-300 rounded bg-primary group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Secure Data Storage */}
           {/* <SecureData/>============================================================================================= */}


        {/* Call To Action */}
        {/* <section id="cta" className="flex items-center justify-center section-dark py-24">
          <div className="container">
            <div className="relative p-10 overflow-hidden text-center border rounded-2xl bg-gradient-to-r from-primary/10 via-fuchsia-500/10 to-emerald-500/10">
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to see Geotrics in action?
              </h3>
              <p className="mt-3 text-foreground/70">
                Book a live demo tailored to your use case.
              </p>
              <div className="flex justify-center mt-6">
                <Button size="lg">Request demo</Button>
              </div>
            </div>
          </div>
        </section> */}
      {/* <Footer />==================================================================================================== */}
      {/* </main>
    </div> */}
    </>
  );
}

export default App;
