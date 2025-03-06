export default function SocialProofSection() {
    // Company data with name and logo
    const companies = [
      { name: "Boltshift", logo: "/src/assets/Shape.png" },
      { name: "Lightbox", logo: "/src/assets/Logomark.png" },
      { name: "FeatherDev", logo: "/src/assets/Logomark (1).png" },
      { name: "Spherule", logo: "/src/assets/Logomark (2).png" },
      { name: "GlobalBank", logo: "/src/assets/Logomark (3).png" },
      { name: "Nietzsche", logo: "/src/assets/Logomark (4).png" },
    ]
  
    return (
      <div className="py-24 px-24 max-w-7xl mx-auto">
        {/* Text line */}
        <p className="text-center text-[#475467] text-base font-medium mb-8">
          Join 400+ companies that trust our innovative IT solutions to drive growth and success.
        </p>
  
        {/* Logos section */}
        <div className="flex flex-wrap justify-between items-center opacity-70">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={44}
                height={44}
                className="text-gray-600"
              />
              <span className="text-[#101828]"
              style={{
                width: 126.35601043701172,
                height: 21.180267333984375,
                fontWeight: 600,
                fontSize: 18,
                // top: 12.91px,
                // left: 54.87px,
              }}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  