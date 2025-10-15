import React from 'react'
import AnimatedBox from './AnimatedBox '
import GradientText from './GradientText.jsx'
function DashboardSection() {
  return (
       <section id="Dashboard" className=" bg-[#0b1220] py-16 px-6 flex flex-col justify-center items-center  ">
      {/* Section Title */}
      <h2 className="text-4xl font-bold  text-center text-white mb-2">
        <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
        Monitoring Dashboard
</GradientText>
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Real-time insights and predictive analytics for proactive mining management
      </p>

      {/* Dashboard Container */}
      <div
        className="rounded-xl p-8 border shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-[#FF3300]"
        style={{ background: "rgba(30,30,30,0.8)" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 className="text-xl font-semibold text-[#FF3300]">Mining Activity Overview</h3>
          <button className="bg-[#FF3300] hover:bg-[#e67e22] text-white font-medium px-5 py-2 rounded-lg transition">
            Export Report
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-10 mt-12 md:grid-cols-4">
          {[
            { title: "Active Sites", value: "142" },
            { title: "Illegal Zones", value: "23" },
            { title: "Compliance Rate", value: "84%" },
            { title: "Environmental Impact", value: "Medium" },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-lg p-6 text-center border-l-4 shadow-md hover:shadow-lg transition-shadow duration-300 "
              style={{ background: "#252525", borderColor: "#FF3300" }}
            >
              <h3 className="text-gray-300 text-base mb-2">{card.title}</h3>
              <div className="text-3xl font-bold text-white">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Prediction Panel */}
        <div
          className="relative rounded-lg p-6 mt-6 border-l-4 overflow-hidden"
          style={{ background: "#252525", borderColor: "#FF3300" }}
        >
          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, transparent, rgba(211,84,0,0.1), transparent)",
              animation: "pulse 3s linear infinite",
            }}
          />
          <div className="flex items-center gap-2 mb-3 text-[#FF3300] relative z-10">
            <span className="text-2xl">🔮</span>
            <h3 className="text-lg font-semibold">Next Probable Illegal Zone</h3>
          </div>
          <p className="text-gray-300 relative z-10">
            Based on historical patterns and current activity, our AI predicts a high probability of unauthorized mining activity in the{" "}
            <span className="font-semibold text-[#e67e22]">Northern region</span> within the next 30 days.
          </p>
        </div>
      </div>

      {/* Inline keyframes for pulse animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  )
}

export default DashboardSection
