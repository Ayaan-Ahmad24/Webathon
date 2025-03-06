import React from "react";

const AILandingPage = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      {/* Main container */}
      <div
        className="relative w-full bg-blue-900 overflow-hidden rounded-3xl z-10"
        style={{
          width: "1376px",
          height: "758px",
          borderRadius: "24px",
        }}
      >
        {/* Content container with text */}
        <div className="absolute inset-0 z-10 px-16 py-20 flex flex-col justify-center gap-12 mb-80">
          <div style={{ width: "560px", height: "64px", maxWidth: "560px" }}>
            <div>
              <div>
                <h1
                  className="text-white mb-6"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 700,
                    fontSize: "60px",
                    lineHeight: "72px",
                    letterSpacing: "-2%",
                    width: "600px",
                  }}
                >
                  Fast-Tracking Your AI Evolution
                </h1>
                <p
                  className="text-white/90 mb-16"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0%",
                  }}
                >
                  Empowering businesses with cutting-edge technology and tailored
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition">
                Discover Our Services
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Background image with mirror transform */}
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <img
            src="/src/assets/b401791e37bdd2c83c2346298853de62.png"
            alt="Background"
            className="object-cover w-full h-full"
            style={{ transform: "scaleX(-1)" }}
          />

          {/* Gradient overlay style */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(29, 49, 95, 0) 0%, #1D315F 67.83%)",
            }}
          ></div>
        </div>
      </div>

      {/* Second div below the main container */}
      <div
        className="absolute z-0 rounded-b-3xl shadow-lg mx-auto"
        style={{
          width: "1298px",
          height: "716px",
          paddingRight: "64px",
          paddingLeft: "64px",
          gap: "32px",
          opacity: 0.5,
          borderRadius: "24px",
          marginTop: "74px",
          backgroundColor: "#27538E",
          filter: "blur(64px)",
        }}
      ></div>

      <div
        className="absolute z-0 rounded-b-3xl shadow-lg mx-auto"
        style={{
          width: "1332px",
          height: "734px",
          paddingRight: "64px",
          paddingLeft: "64px",
          gap: "32px",
          borderRadius: "24px",
          background: "#27538E",
          marginTop: "39px",
        }}
      ></div>
    </div>
  );
};

export default AILandingPage;