// import React from "react";
// import GradientText from "./GradientText";
// import "../assets/Blockchainsecurity.png"
// function SecureData() {
//   return (
//     <section
//       id="DataStore"
//       className=" flex items-center justify-center section-dark py-24"
//     >
//       <div className="container text-center">
//         <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
//           <GradientText
//             colors={["#FFFFFF", " #FF2F03", "#FF2F03", "#FF2F03", "#FF2F03"]}
//             animationSpeed={1.5}
//             showBorder={false}
//             className="custom-class"
//           >
//             Secure Data Storage
//           </GradientText>
//             {/* <img src="../assets/Blockchainsecurity.png" alt="Logo" width="20" height="20" /> */}
//         </h2>
//         <p className=" text-center text-gray-400 mt-4 text-foreground/70">
//           Advanced blockchain-based storage for mining data and analytics
//         </p>
//         <div className="grid gap-20 mt-12 md:grid-cols-3">
//           {[
//             [
//               "../assets/Blockchainsecurity.png",
//               "Blockchain Security",
//               "All mining data is stored on a secure, immutable blockchain to ensure data integrity and prevent tampering.",
//             ],
//             [
//               "../assets/cloudSecurity.png",
//               "Cloud Storage",
//               "Scalable cloud infrastructure to store petabytes of satellite imagery, sensor data, and analysis results.",
//             ],
//             [
//               "../assets/Dataencryption.png",
//               "Data Encryption",
//               "Military-grade encryption for all stored data, ensuring privacy and protection against unauthorized access.",
//             ],
//           ].map((title) => (
//             <div
//               key={title}
//               className="p-6 border group rounded-xl bg-card shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.44)] transition-shadow duration-400 hover:scale-105 hover:shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.6)]"
//             >
//               <div className="w-10 h-10 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20" >
//                  <img src={title[0]} alt="Logo" width="10" height="10" />
//               </div>
//               <h3 className="mt-4 text-lg font-semibold">
//                   <GradientText
//         //    colors={["#7312E0", " #FF009B", "#5227ff", "#FF6BC5", "#FF6BC5","#FF6BC5"]}
//            colors={["#FFFFFF", " #FF2F03", "#FF2F03", "#FF2F03", "#FF2F03"]}
//             animationSpeed={1.5}
//             showBorder={false}
//             className="custom-class"
//           >
//                 {title[1]}
//           </GradientText>
                
//                 </h3>
//               {/* <p className="mt-2 text-sm text-foreground/70">{title[1]}</p> */}
//               <div className="w-0 h-1 mt-4 transition-all duration-300 rounded bg-primary group-hover:w-20" />
//            <button className="px-5 py-2.5 rounded-lg text-white font-semibold bg-[#FF2F03] hover:bg-[#e62900] transition-all duration-300 shadow-md hover:shadow-lg">
//   Click Me
// </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SecureData;

// // #FFA500


import React from "react";
import GradientText from "./GradientText";

// ✅ Import images properly
import Blockchainsecurity from "../assets/Blockchainsecurity.png";
import cloudSecurity from "../assets/cloudSecurity.png";
import Dataencryption from "../assets/Dataencryption.png";

function SecureData() {
  const features = [
    [
      Blockchainsecurity,
      "Blockchain Security",
      "All mining data is stored on a secure, immutable blockchain to ensure data integrity and prevent tampering.",
    ],
    [
      cloudSecurity,
      "Cloud Storage",
      "Scalable cloud infrastructure to store petabytes of satellite imagery, sensor data, and analysis results.",
    ],
    [
      Dataencryption,
      "Data Encryption",
      "Military-grade encryption for all stored data, ensuring privacy and protection against unauthorized access.",
    ],
  ];

  return (
    <section
      id="DataStore"
      className="flex items-center justify-center section-dark py-24"
    >
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          <GradientText
            colors={["#FFFFFF", "#FF2F03", "#FF2F03", "#FF2F03", "#FF2F03"]}
            animationSpeed={1.5}
            showBorder={false}
            className="custom-class"
          >
            Secure Data Storage
          </GradientText>
        </h2>

        <p className="text-center text-gray-400 mt-4 text-foreground/70">
          Advanced blockchain-based storage for mining data and analytics
        </p>

        <div className="grid gap-20 mt-12 md:grid-cols-3">
          {features.map(([imgSrc, title, description], index) => (
            <div
              key={index}
              className="p-6 border group rounded-xl bg-card shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.44)] transition-transform duration-400 hover:scale-105 hover:shadow-[3px_5px_35px_8px_rgba(255,_89,_0,_0.6)]"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-md bg-primary/10 ring-1 ring-primary/20">
                <img src={imgSrc} alt={title} width="48" height="48" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                <GradientText
                  colors={["#FFFFFF", "#FF2F03", "#FF2F03", "#FF2F03"]}
                  animationSpeed={1.5}
                  showBorder={false}
                >
                  {title}
                </GradientText>
              </h3>

              <p className="mt-3 text-sm text-foreground/70">{description}</p>

              <div className="w-0 h-1 mt-4 transition-all duration-300 rounded bg-primary group-hover:w-20" />
              <button className="mt-6 px-5 py-2.5 rounded-lg text-white font-semibold bg-[#FF2F03] hover:bg-[#e62900] transition-all duration-300 shadow-md hover:shadow-lg">
                Click Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecureData;

