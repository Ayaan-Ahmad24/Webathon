// import React from "react";

// export default function WorldwideLocations() {
//   const locations = [
//     {
//       country: "United States",
//       address: "Building X, Street Y, Baltimore MD",
//       link: "#",
//     },
//     {
//       country: "Pakistan",
//       address: "Building X, Street Y, Lahore PK",
//       link: "#",
//     },
//     {
//       country: "Whole Earth",
//       address: "Mon-Fri from 8am to 5pm (PST)",
//       phone: "+1 (555) 000-0000",
//       noLink: true,
//     },
//   ];

//   return (
//     <section className="py-16 px-4 max-w-6xl mx-auto">
//       <div className="text-center mb-12">
//         <div className="flex justify-center mb-6">
//           <span
//             style={{
//               width: "112px",
//               height: "28px",
//               paddingTop: "4px",
//               paddingRight: "12px",
//               paddingBottom: "4px",
//               paddingLeft: "12px",
//               borderRadius: "18px",
//               borderWidth: "1px",
//               background: "#F5F5FF",
//               border: "1px solid #D7DEFE",
//               fontFamily: "Urbanist",
//               fontWeight: 400,
//               fontSize: "14px",
//               lineHeight: "20px",
//               letterSpacing: "0%",
//               textAlign: "center",
//               color: "#414EC6",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             Our Locations
//           </span>
//         </div>
//         <h2
//           style={{
//             fontFamily: "Urbanist",
//             fontWeight: 600,
//             fontSize: "36px",
//             lineHeight: "44px",
//             letterSpacing: "-2%",
//             textAlign: "center",
//             color: "#101828",
//           }}
//           className="text-4xl font-bold mb-4"
//         >
//           We are WORLDWIDE
//         </h2>
//         <p
//           style={{
//             fontFamily: "Urbanist",
//             fontWeight: 400,
//             fontSize: "20px",
//             lineHeight: "30px",
//             letterSpacing: "0%",
//             textAlign: "center",
//             color: "#475467",
//           }}
//           className="text-gray-600 max-w-2xl mx-auto"
//         >
//           We help our clients from almost every part of the world.
//         </p>
//       </div>

//       <div className="relative mb-16">
//         <div
//           className="w-full h-[488px] relative"
//           style={{
//             width: "1280px",
//             height: "488px",
//             maxWidth: "1280px",
//             paddingRight: "32px",
//             paddingLeft: "32px",
//           }}
//         >
//           <img src="/src/assets/Map wrap.png?height=400&width=1600" alt="World Map" className="w-full h-full object-contain" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {locations.map((location, index) => (
//           <div key={index} className="text-center">
//             <h3
//               style={{
//                 fontFamily: "Urbanist",
//                 fontWeight: 600,
//                 fontSize: "20px",
//                 lineHeight: "30px",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#101828",
//               }}
//               className="text-xl font-semibold mb-2"
//             >
//               {location.country}
//             </h3>
//             <p
//               style={{
//                 fontFamily: "Urbanist",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "24px",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#475467",
//               }}
//               className="text-gray-500 mb-4"
//             >
//               {location.address}
//             </p>
//             {location.phone ? (
//               <p
//                 style={{
//                   fontFamily: "Urbanist",
//                   fontWeight: 600,
//                   fontSize: "16px",
//                   lineHeight: "24px",
//                   letterSpacing: "0%",
//                   textAlign: "center",
//                   color: "#415EC6",
//                 }}
//                 className="text-indigo-600 font-medium"
//               >
//                 {location.phone}
//               </p>
//             ) : !location.noLink ? (
//               <a
//                 href={location.link}
//                 style={{
//                   fontFamily: "Urbanist",
//                   fontWeight: 600,
//                   fontSize: "16px",
//                   lineHeight: "24px",
//                   letterSpacing: "0%",
//                   textAlign: "center",
//                   color: "#415EC6",
//                 }}
//                 className="text-indigo-600 font-medium hover:underline"
//               >
//                 Find Us
//               </a>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function WorldwideLocations() {
  const locations = [
    {
      country: "United States",
      address: "Building X, Street Y, Baltimore MD",
      link: "#",
    },
    {
      country: "Pakistan",
      address: "Building X, Street Y, Lahore PK",
      link: "#",
    },
    {
      country: "Whole Earth",
      address: "Mon-Fri from 8am to 5pm (PST)",
      phone: "+1 (555) 000-0000",
      noLink: true,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 mx-auto" style={{ maxWidth: "100%", overflow: "hidden" }}>
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex justify-center mb-4 sm:mb-6">
          <span
            style={{
              paddingTop: "4px",
              paddingRight: "12px",
              paddingBottom: "4px",
              paddingLeft: "12px",
              borderRadius: "18px",
              background: "#F5F5FF",
              border: "1px solid #D7DEFE",
              fontFamily: "Urbanist",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#414EC6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="text-xs sm:text-sm"
          >
            Our Locations
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Urbanist",
            fontWeight: 600,
            letterSpacing: "-2%",
            textAlign: "center",
            color: "#101828",
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
        >
          We are WORLDWIDE
        </h2>
        <p
          style={{
            fontFamily: "Urbanist",
            fontWeight: 400,
            letterSpacing: "0%",
            textAlign: "center",
            color: "#475467",
          }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We help our clients from almost every part of the world.
        </p>
      </div>

      <div className="relative mb-8 sm:mb-12 md:mb-16">
        <div className="w-full relative">
          <img 
            src="/src/assets/Map wrap.png?height=400&width=1600" 
            alt="World Map" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {locations.map((location, index) => (
          <div key={index} className="text-center px-4">
            <h3
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                letterSpacing: "0%",
                textAlign: "center",
                color: "#101828",
              }}
              className="text-lg sm:text-xl font-semibold mb-2"
            >
              {location.country}
            </h3>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                letterSpacing: "0%",
                textAlign: "center",
                color: "#475467",
              }}
              className="text-sm sm:text-base text-gray-500 mb-4"
            >
              {location.address}
            </p>
            {location.phone ? (
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#415EC6",
                }}
                className="text-sm sm:text-base text-indigo-600 font-medium"
              >
                {location.phone}
              </p>
            ) : !location.noLink ? (
              <a
                href={location.link}
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#415EC6",
                }}
                className="text-sm sm:text-base text-indigo-600 font-medium hover:underline"
              >
                Find Us
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}