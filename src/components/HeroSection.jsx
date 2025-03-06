import React from "react";

const AILandingPage = () => {
  return (
    <div className="flex flex-col items-center mt-3 px-4 sm:px-6 md:px-8">
      {/* Main container */}
      <div
        className="relative w-full bg-blue-900 overflow-hidden rounded-3xl z-10"
        style={{
          maxWidth: "1376px",
          borderRadius: "24px",
          height: "auto", 
          minHeight: "480px",
          aspectRatio: "1376/758"
        }}
      >
        {/* Content container with text */}
        <div className="absolute inset-0 z-10 px-6 sm:px-10 md:px-16 py-10 sm:py-16 md:py-20 flex flex-col justify-center">
          <div className="max-w-full md:max-w-[560px]">
            <div>
              <div>
                <h1
                  className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 700,
                    lineHeight: "1.2",
                    letterSpacing: "-2%",
                  }}
                >
                  Fast-Tracking Your AI Evolution
                </h1>
                <p
                  className="text-white/90 mb-8 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-xl"
                  style={{
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    letterSpacing: "0%",
                  }}
                >
                  Empowering businesses with cutting-edge technology and tailored
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition w-full sm:w-auto text-sm sm:text-base">
                Discover Our Services
              </button>
              <button className="border border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition flex items-center justify-center w-full sm:w-auto text-sm sm:text-base">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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

      {/* Second div below the main container - shadow effects */}
      <div
        className="absolute z-0 rounded-b-3xl shadow-lg mx-auto hidden sm:block"
        style={{
          width: "95%",
          maxWidth: "1298px",
          height: "auto",
          aspectRatio: "1298/716",
          opacity: 0.5,
          borderRadius: "24px",
          marginTop: "74px",
          backgroundColor: "#27538E",
          filter: "blur(64px)",
        }}
      ></div>

      <div
        className="absolute z-0 rounded-b-3xl shadow-lg mx-auto hidden sm:block"
        style={{
          width: "97%",
          maxWidth: "1332px",
          height: "auto",
          aspectRatio: "1332/734",
          borderRadius: "24px",
          background: "#27538E",
          marginTop: "39px",
        }}
      ></div>
    </div>
  );
};

export default AILandingPage;