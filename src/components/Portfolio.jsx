import React from "react";

export default function PortfolioSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background pattern dots - can be styled with CSS or replaced with an actual pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-20 gap-4 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Portfolio Header */}
        <div className="text-center mb-16">
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
            className="text-center font-semibold mb-4"
            style={{
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-2%",
              color: "#101828",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            Products We Have Worked On
          </h2>

          <p
            className="max-w-3xl mx-auto text-center"
            style={{
              fontFamily: "Urbanist",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#475467",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Product 1 */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center mb-24"
          style={{
            width: "1280px",
            height: "400px",
            maxWidth: "1280px",
            paddingRight: "32px",
            paddingLeft: "32px",
            gap: "196px",
          }}
        >
          <div
            style={{
              width: "560px",
              height: "218px",
              gap: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "38px",
                letterSpacing: "0%",
                color: "#101828",
                padding: "12px",
                borderRadius: "8px",
              }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Product # 1
            </h3>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0%",
                color: "#475467",
                padding: "10px",
                borderRadius: "8px",
              }}
              className="text-gray-600 mb-6"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop. Leverage automation to
              move fast, while always giving customers a human, helpful
              experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M15 12L10 15.5V8.5L15 12Z" fill="currentColor" />
                </svg>
                Demo
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-white" style={{ backgroundColor: "#1D315F" }}>
                Learn more
              </button>
            </div>
          </div>
          <div
            className="relative"
            style={{
              width: "560px",
              height: "400px",
              borderRadius: "24px",
              background: "#F2F4F7",
            }}
          >
            <img
              src="/src/assets/3_2 screen mockup.png"
              alt="Product 1 Dashboard"
              style={{
                width: "480px",
                height: "320px",
                borderRadius: "6px",
                top: "40px",
                left: "40px",
              }}
              className="absolute"
            />
            <img
              src="/src/assets/Line pattern.png"
              alt="Product 1 Dashboard"
              style={{
                width: "298px",
                height: "408px",
                borderRadius: "6px",
                top: "88px",
                left: "358px",
                opacity: "0.7",
                zIndex: "-1",
              }}
              className="absolute"
            />
          </div>
        </div>

        {/* Product 2 */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center mb-24"
          style={{
            width: "1280px",
            height: "400px",
            maxWidth: "1280px",
            paddingRight: "32px",
            paddingLeft: "32px",
            gap: "196px",
          }}
        >
          <div
            className="order-2 md:order-1 relative"
            style={{
              width: "560px",
              height: "400px",
              borderRadius: "24px",
              background: "#F2F4F7",
            }}
          >
            <img
              src="/src/assets/3_2 screen mockup.png"
              alt="Product 2 Dashboard"
              style={{
                width: "480px",
                height: "320px",
                borderRadius: "6px",
                top: "40px",
                left: "40px",
              }}
              className="absolute"
            />
            <img
              src="/src/assets/Line pattern.png"
              alt="Product 2 Dashboard"
              style={{
                width: "298px",
                height: "408px",
                borderRadius: "6px",
                top: "88px",
                left: "-96px",
                opacity: "0.7",
                zIndex: "-1",
              }}
              className="absolute"
            />
          </div>

          <div
            className="order-1 md:order-2"
            style={{
              width: "560px",
              height: "218px",
              gap: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "38px",
                letterSpacing: "0%",
                color: "#101828",
                padding: "12px",
                borderRadius: "8px",
              }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Product # 2
            </h3>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0%",
                color: "#475467",
                padding: "10px",
                borderRadius: "8px",
              }}
              className="text-gray-600 mb-6"
            >
              Keep your customers in the flow by embedding help articles right
              on your website. With Beacon, they never have to leave the page to
              find an answer.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M15 12L10 15.5V8.5L15 12Z" fill="currentColor" />
                </svg>
                Demo
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-white" style={{ backgroundColor: "#1D315F" }}>
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center"
          style={{
            width: "1280px",
            height: "400px",
            maxWidth: "1280px",
            paddingRight: "32px",
            paddingLeft: "32px",
            gap: "196px",
          }}
        >
          <div
            style={{
              width: "560px",
              height: "218px",
              gap: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "38px",
                letterSpacing: "0%",
                color: "#101828",
                padding: "12px",
                borderRadius: "8px",
              }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Product # 3
            </h3>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: "0%",
                color: "#475467",
                padding: "10px",
                borderRadius: "8px",
              }}
              className="text-gray-600 mb-6"
            >
              Measure what matters with Untitled's easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M15 12L10 15.5V8.5L15 12Z" fill="currentColor" />
                </svg>
                Demo
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-white" style={{ backgroundColor: "#1D315F" }}>
                Learn more
              </button>
            </div>
          </div>
          <div
            className="relative"
            style={{
              width: "560px",
              height: "400px",
              borderRadius: "24px",
              background: "#F2F4F7",
            }}
          >
            <img
              src="/src/assets/3_2 screen mockup.png"
              alt="Product 3 Dashboard"
              style={{
                width: "480px",
                height: "320px",
                borderRadius: "6px",
                top: "40px",
                left: "40px",
              }}
              className="absolute"
            />
            <img
              src="/src/assets/Line pattern.png"
              alt="Product 1 Dashboard"
              style={{
                width: "298px",
                height: "408px",
                borderRadius: "6px",
                top: "-96px",
                left: "358px",
                opacity: "0.7",
                zIndex: "-1",
              }}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
