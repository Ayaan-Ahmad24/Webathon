// import { ArrowUpRight, Globe } from "lucide-react";

// const XIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     x="0px"
//     y="0px"
//     width="20"
//     height="20"
//     viewBox="0 0 50 50"
//     fill="#FFFFFF"
//   >
//     <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
//   </svg>
// );
// const LinkedIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     x="0px"
//     y="0px"
//     width="20"
//     height="20"
//     viewBox="0 0 30 30"
//     fill="#FFFFFF"
//   >
//     <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
//   </svg>
// );

// export default function TeamSection() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
//       <div className="flex flex-col items-center text-center mb-12">
//         <div className="flex justify-center mb-6">
//           <span
//             style={{
//               width: "102px",
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
//             Why Us
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
//           className="text-4xl font-medium mb-6"
//         >
//           Meet Our Team
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
//           Our philosophy is simple — hire a team of diverse, passionate people
//           and foster a culture that empowers you to do your best work.
//         </p>

//         <div className="flex gap-4 mt-8">
//           <button className="px-5 py-3 border border-gray-300 rounded-md text-gray-700 font-medium">
//             Read our principles
//           </button>
//           <button className="px-5 py-3 bg-[#1e335f] text-white rounded-md font-medium">
//             We're hiring!
//           </button>
//         </div>
//       </div>

//       <div
//         className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         style={{
//           maxWidth: "100%",
//           paddingRight: "32px",
//           paddingLeft: "32px",
//         }}
//       >
//         {/* Faizan Ahmad Card */}
//         <div
//           className="relative overflow-hidden col-span-2"
//           style={{
//             width: "100%",
//             height: "744px",
//             borderTopLeftRadius: "24px",
//             borderBottomLeftRadius: "24px",
//           }}
//         >
//           <img
//             src="/src/assets/509f9f8f5f9eee6eead2a5253aa2b373.png?height=600&width=600"
//             alt="Faizan Ahmad"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
//           <div
//             className="absolute bottom-0 left-0 p-8 text-white"
//             style={{
//               width: "625px",
//               height: "214px",
//               gap: "32px",
//               paddingTop: "24px",
//               paddingRight: "20px",
//               paddingBottom: "24px",
//               paddingLeft: "20px",
//               borderRadius: "16px",
//               borderWidth: "1px",
//               border: "1px solid #FFFFFF4D",
//               color: "#FFFFFF4D",
//               backdropFilter: "blur(24px)",
//               marginBottom: "16px",
//               marginLeft: "36px",
//             }}
//           >
//             <div className="flex items-center justify-between w-full">
//               <h3
//                 style={{
//                   fontFamily: "Urbanist",
//                   fontWeight: 600,
//                   fontSize: "30px",
//                   lineHeight: "38px",
//                   letterSpacing: "0%",
//                   color: "white",
//                 }}
//                 className="text-3xl font-medium mb-1"
//               >
//                 Faizan Ahmad
//               </h3>
//               <ArrowUpRight className="h-5 w-5 text-white" />
//             </div>
//             <p
//               style={{
//                 fontFamily: "Urbanist",
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 lineHeight: "28px",
//                 letterSpacing: "0%",
//                 color: "white",
//               }}
//               className="text-lg mb-1"
//             >
//               Founder & CEO
//             </p>
//             <p
//               style={{
//                 fontFamily: "Urbanist",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "24px",
//                 letterSpacing: "0%",
//                 color: "white",
//               }}
//               className="text-sm text-gray-200 mb-4"
//             >
//               Former co-founder of Opendoor. Early staff at Apple and Google.
//             </p>
//             <div className="flex gap-3">
//               <XIcon />
//               <LinkedIcon />
//               <Globe className="h-5 w-5 text-white" />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-rows-2 gap-6">
//           {/* Abdullah Sarfaraz Card */}
//           <div
//             className="relative overflow-hidden"
//             style={{
//               width: "100%",
//               height: "360px",
//               borderTopRightRadius: "24px",
//             }}
//           >
//             <img
//               src="/src/assets/ed3b0020bf21b79e3ffe3090ac7b3f11.png?height=290&width=500"
//               alt="Abdullah Sarfaraz"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/20"></div>
//             <div
//               className="absolute bottom-0 left-0 p-6 text-white"
//               style={{
//                 width: "300px",
//                 height: "120px",
//                 gap: "32px",
//                 paddingTop: "24px",
//                 paddingRight: "20px",
//                 paddingBottom: "24px",
//                 paddingLeft: "20px",
//                 borderRadius: "16px",
//                 borderWidth: "1px",
//                 background: "#FFFFFF4D",
//                 border: "1px solid #FFFFFF4D",
//                 backdropFilter: "blur(24px)",
//                 marginBottom: "16px",
//                 marginLeft: "16px",
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h3
//                   style={{
//                     fontFamily: "Urbanist",
//                     fontWeight: 600,
//                     fontSize: "28px",
//                     lineHeight: "38px",
//                     letterSpacing: "0%",
//                     color: "white",
//                   }}
//                   className="text-2xl font-medium"
//                 >
//                   Abdullah Sarfaraz
//                 </h3>
//                 <ArrowUpRight className="h-5 w-5 text-white" />
//               </div>
//               <p
//                 style={{
//                   fontFamily: "Urbanist",
//                   fontWeight: 600,
//                   fontSize: "18px",
//                   lineHeight: "28px",
//                   letterSpacing: "0%",
//                   color: "white",
//                 }}
//               >
//                 Co-Founder
//               </p>
//             </div>
//           </div>

//           {/* Annie Stanley Card */}
//           <div
//             className="relative overflow-hidden"
//             style={{
//               width: "100%",
//               height: "360px",
//               borderBottomRightRadius: "24px",
//             }}
//           >
//             <img
//               src="/src/assets/06d2699c1f5c8ea55fd8b44762d63e7b.png?height=290&width=500"
//               alt="Annie Stanley"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/20"></div>
//             <div
//               className="absolute bottom-0 left-0 p-6 text-white"
//               style={{
//                 width: "300px",
//                 height: "120px",
//                 gap: "32px",
//                 paddingTop: "24px",
//                 paddingRight: "20px",
//                 paddingBottom: "24px",
//                 paddingLeft: "20px",
//                 borderRadius: "16px",
//                 borderWidth: "1px",
//                 background: "#FFFFFF4D",
//                 border: "1px solid #FFFFFF4D",
//                 backdropFilter: "blur(24px)",
//                 marginBottom: "16px",
//                 marginLeft: "16px",
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h3
//                   style={{
//                     fontFamily: "Urbanist",
//                     fontWeight: 600,
//                     fontSize: "28px",
//                     lineHeight: "38px",
//                     letterSpacing: "0%",
//                     color: "white",
//                   }}
//                   className="text-2xl font-medium"
//                 >
//                   Annie Stanley
//                 </h3>
//                 <ArrowUpRight className="h-5 w-5 text-white" />
//               </div>
//               <p
//                 style={{
//                   fontFamily: "Urbanist",
//                   fontWeight: 600,
//                   fontSize: "18px",
//                   lineHeight: "28px",
//                   letterSpacing: "0%",
//                   color: "white",
//                 }}
//               >
//                 Product Manager
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import { ArrowUpRight, Globe } from "lucide-react";

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    fill="#FFFFFF"
  >
    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
  </svg>
);

const LinkedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="#FFFFFF"
  >
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
  </svg>
);

export default function TeamSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex justify-center mb-6">
          <span
            style={{
              width: "102px",
              height: "28px",
              paddingTop: "4px",
              paddingRight: "12px",
              paddingBottom: "4px",
              paddingLeft: "12px",
              borderRadius: "18px",
              borderWidth: "1px",
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
          >
            Why Us
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Urbanist",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "-2%",
            textAlign: "center",
            color: "#101828",
          }}
          className="text-4xl font-medium mb-6"
        >
          Meet Our Team
        </h2>
        <p
          style={{
            fontFamily: "Urbanist",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#475467",
          }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-5 py-3 border border-gray-300 rounded-md text-gray-700 font-medium">
            Read our principles
          </button>
          <button className="px-5 py-3 bg-[#1e335f] text-white rounded-md font-medium">
            We're hiring!
          </button>
        </div>
      </div>

      {/* Team Members */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          maxWidth: "100%",
          paddingRight: "32px",
          paddingLeft: "32px",
        }}
      >
        {/* Faizan Ahmad Card */}
        <div
          className="relative overflow-hidden col-span-2"
          style={{
            width: "100%",
            height: "744px",
            borderTopLeftRadius: "24px",
            borderBottomLeftRadius: "24px",
          }}
        >
          <img
            src="/src/assets/509f9f8f5f9eee6eead2a5253aa2b373.png?height=600&width=600"
            alt="Faizan Ahmad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
          <div
            className="absolute bottom-0 left-0 p-8 text-white"
            style={{
              width: "625px",
              height: "214px",
              gap: "32px",
              paddingTop: "24px",
              paddingRight: "20px",
              paddingBottom: "24px",
              paddingLeft: "20px",
              borderRadius: "16px",
              borderWidth: "1px",
              border: "1px solid #FFFFFF4D",
              color: "#FFFFFF4D",
              backdropFilter: "blur(24px)",
              marginBottom: "16px",
              marginLeft: "36px",
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h3
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "38px",
                  letterSpacing: "0%",
                  color: "white",
                }}
                className="text-3xl font-medium mb-1"
              >
                Faizan Ahmad
              </h3>
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0%",
                color: "white",
              }}
              className="text-lg mb-1"
            >
              Founder & CEO
            </p>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                color: "white",
              }}
              className="text-sm text-gray-200 mb-4"
            >
              Former co-founder of Opendoor. Early staff at Apple and Google.
            </p>
            <div className="flex gap-3">
              <XIcon />
              <LinkedIcon />
              <Globe className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          {/* Abdullah Sarfaraz Card */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: "360px",
              borderTopRightRadius: "24px",
            }}
          >
            <img
              src="/src/assets/ed3b0020bf21b79e3ffe3090ac7b3f11.png?height=290&width=500"
              alt="Abdullah Sarfaraz"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div
              className="absolute bottom-0 left-0 p-6 text-white"
              style={{
                width: "300px",
                height: "120px",
                gap: "32px",
                paddingTop: "24px",
                paddingRight: "20px",
                paddingBottom: "24px",
                paddingLeft: "20px",
                borderRadius: "16px",
                borderWidth: "1px",
                background: "#FFFFFF4D",
                border: "1px solid #FFFFFF4D",
                backdropFilter: "blur(24px)",
                marginBottom: "16px",
                marginLeft: "16px",
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h3
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "38px",
                    letterSpacing: "0%",
                    color: "white",
                  }}
                  className="text-2xl font-medium"
                >
                  Abdullah Sarfaraz
                </h3>
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                  letterSpacing: "0%",
                  color: "white",
                }}
              >
                Co-Founder
              </p>
            </div>
          </div>

          {/* Annie Stanley Card */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: "360px",
              borderBottomRightRadius: "24px",
            }}
          >
            <img
              src="/src/assets/06d2699c1f5c8ea55fd8b44762d63e7b.png?height=290&width=500"
              alt="Annie Stanley"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div
              className="absolute bottom-0 left-0 p-6 text-white"
              style={{
                width: "300px",
                height: "120px",
                gap: "32px",
                paddingTop: "24px",
                paddingRight: "20px",
                paddingBottom: "24px",
                paddingLeft: "20px",
                borderRadius: "16px",
                borderWidth: "1px",
                background: "#FFFFFF4D",
                border: "1px solid #FFFFFF4D",
                backdropFilter: "blur(24px)",
                marginBottom: "16px",
                marginLeft: "16px",
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h3
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "38px",
                    letterSpacing: "0%",
                    color: "white",
                  }}
                  className="text-2xl font-medium"
                >
                  Annie Stanley
                </h3>
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                  letterSpacing: "0%",
                  color: "white",
                }}
              >
                Product Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}