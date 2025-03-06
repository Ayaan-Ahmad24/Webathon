// export default function SocialProofSection() {
//     // Company data with name and logo
//     const companies = [
//       { name: "Boltshift", logo: "/src/assets/Shape.png" },
//       { name: "Lightbox", logo: "/src/assets/Logomark.png" },
//       { name: "FeatherDev", logo: "/src/assets/Logomark (1).png" },
//       { name: "Spherule", logo: "/src/assets/Logomark (2).png" },
//       { name: "GlobalBank", logo: "/src/assets/Logomark (3).png" },
//       { name: "Nietzsche", logo: "/src/assets/Logomark (4).png" },
//     ]
  
//     return (
//       <div className="py-24 px-24 max-w-7xl mx-auto">
//         {/* Text line */}
//         <p className="text-center text-[#475467] text-base font-medium mb-8">
//           Join 400+ companies that trust our innovative IT solutions to drive growth and success.
//         </p>
  
//         {/* Logos section */}
//         <div className="flex flex-wrap justify-between items-center opacity-70">
//           {companies.map((company, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <img
//                 src={company.logo || "/placeholder.svg"}
//                 alt={`${company.name} logo`}
//                 width={44}
//                 height={44}
//                 className="text-gray-600"
//               />
//               <span className="text-[#101828]"
//               style={{
//                 width: 126.35601043701172,
//                 height: 21.180267333984375,
//                 fontWeight: 600,
//                 fontSize: 18,
//                 // top: 12.91px,
//                 // left: 54.87px,
//               }}>{company.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
  
  



export default function SocialProofSection() {
  // Company data with name and logo
  const companies = [
    { name: "Boltshift", logo: "/src/assets/Shape.png" },
    { name: "Lightbox", logo: "/src/assets/Logomark.png" },
    { name: "FeatherDev", logo: "/src/assets/Logomark (1).png" },
    { name: "Spherule", logo: "/src/assets/Logomark (2).png" },
    { name: "GlobalBank", logo: "/src/assets/Logomark (3).png" },
    { name: "Nietzsche", logo: "/src/assets/Logomark (4).png" },
  ];

  return (
    // Main container with responsive padding
    <div className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Text line with responsive text size and spacing */}
      <p className="text-center text-[#475467] text-sm sm:text-base font-medium mb-6 sm:mb-8 px-2 sm:px-4">
        Join 400+ companies that trust our innovative IT solutions to drive growth and success.
      </p>

      {/* Logos section - grid layout for better responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 opacity-70">
        {companies.map((company, index) => (
          // Each company in its own responsive container
          <div 
            key={index} 
            className="flex items-center justify-center sm:justify-start gap-2"
          >
            <img
              src={company.logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={44}
              height={44}
              className="text-gray-600 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
            />
            <span 
              className="text-[#101828] text-base sm:text-lg"
              style={{
                fontWeight: 600,
                // Maintaining style but allowing responsive width
                maxWidth: "126px", 
                height: "auto",
              }}
            >
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}