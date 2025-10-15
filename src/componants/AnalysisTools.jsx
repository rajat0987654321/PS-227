import React from "react";
import GradientText from "./GradientText";
import { Link } from "react-router-dom";

// ✅ Import images properly
import Analyzer from "../assets/Analyzer.png";
import Analysis from "../assets/Analysis.png";
import Detection from "../assets/Detection.png";
import map from "../assets/map.png";

function AnalysisTools() {
  // ✅ Use imported images directly in array
  const tools = [
    [Analyzer,"Depth & Volume Analyzer", "/3Dview"],
    [Detection,"Detect Mining Areas", "/AdvancedMap"],
    [Analysis,"Predictive Analytics", "/ImageMap"],
    [map, "Dynamic Eco-Impact Map", "/MapWrapper"],
  ];

  return (
    <section
      id="features"
      className="flex items-center justify-center section-dark py-24"
    >
      <div className="container text-center">
        {/* Section Title */}
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

        <p className="text-center text-gray-400 mt-4 text-foreground/70">
          Comprehensive suite of tools for in-depth mining analysis and
          monitoring
        </p>

        {/* Tool Cards */}
        <div className="grid gap-20 mt-12 md:grid-cols-4">
          {tools.map(([imgSrc, title, link], index) => (
            <div
              key={index}
              className="p-6 border group rounded-xl bg-card shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.2)] transition-transform duration-400 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(66,_220,_219,_0.5)]"
            >
              {/* ✅ Image */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-md bg-primary/10 ring-1 ring-primary/20">
                <img src={imgSrc} alt={title} width="48" height="48" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={1.5}
                  showBorder={false}
                  className="custom-class"
                >
                  {title}
                </GradientText>
              </h3>

              {/* Button */}
              <div className="w-0 h-1 mt-4 transition-all duration-300 rounded bg-primary group-hover:w-20" />
              <Link
                to={link}
                className="inline-block mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
              >
                Click Me
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnalysisTools;
