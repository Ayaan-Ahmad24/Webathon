


import React from "react";
import { MessageCircle, Zap, LayoutGrid } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Why Us label */}
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

      {/* Main heading */}
      <h2
        className="text-center mb-6"
        style={{
          fontFamily: "Urbanist, sans-serif",
          fontWeight: 600,
          fontSize: "36px",
          lineHeight: "44px",
          letterSpacing: "-2%",
          color: "#101828",
        }}
      >
        How does Cache Logic stand out?
      </h2>

      {/* Description paragraph */}
      <p
        className="text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        style={{
          fontFamily: "Urbanist, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "30px",
          letterSpacing: "0%",
          color: "#475467",
        }}
      >
        At Cache Logic, we are a passionate team of tech experts dedicated to
        powering your IT evolution. Founded by industry leaders with diverse
        expertise, we focus on delivering innovative, reliable, and scalable
        tech solutions—from AI and automation to cybersecurity and app
        development. Our mission is simple: help your business stay ahead in a
        digital world.
      </p>

      {/* Main image */}
      <div className="mb-16">
        <img
          src="/src/assets/image 3.png"
          alt="Team collaboration around a table with flowcharts and sticky notes"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Three features section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-4"
            style={{
              color: "#414EC6",
              borderRadius: "50%",
              background: "radial-gradient(circle, #EBECFF 70%, #F5F5FF 30%)",
              padding: "12px",
              border: "8px solid #F5F5FF",
            }}
          >
            <MessageCircle size={24} />
          </div>
          <h3
            className="mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#101828",
            }}
          >
            Global Reach With Localized Expertise.
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#475467",
            }}
          >
            We bring world-class IT solutions to businesses across the globe
            while ensuring tailored, region-specific support that aligns with
            your unique market needs.
          </p>
          <a
            href="#"
            className="font-medium flex items-center group"
            style={{
              color: "#414EC6",
            }}
          >
            Learn more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-4"
            style={{
              color: "#414EC6",
              borderRadius: "50%",
              background: "radial-gradient(circle, #EBECFF 70%, #F5F5FF 30%)",
              padding: "12px",
              border: "8px solid #F5F5FF",
            }}
          >
            <Zap size={24} />
          </div>
          <h3
            className="mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#101828",
            }}
          >
            Dedicated Support To Drive Your Success.
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#475467",
            }}
          >
            Our expert team is always available to provide hands-on assistance,
            ensuring smooth implementation and ongoing optimization of your IT
            solutions.
          </p>
          <a
            href="#"
            className="font-medium flex items-center group"
            style={{
              color: "#414EC6",
            }}
          >
            Learn more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div
            className="mb-4"
            style={{
              color: "#414EC6",
              borderRadius: "50%",
              background: "radial-gradient(circle, #EBECFF 70%, #F5F5FF 30%)",
              padding: "12px",
              border: "8px solid #F5F5FF",
            }}
          >
            <LayoutGrid size={24} />
          </div>
          <h3
            className="mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "#101828",
            }}
          >
            Tailored Solutions For Every Industry.
          </h3>
          <p
            className="mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "#475467",
            }}
          >
            Whether you're in finance, healthcare, or e-commerce, we create
            customized technology solutions designed to meet your industry's
            challenges and goals.
          </p>
          <a
            href="#"
            className="font-medium flex items-center group"
            style={{
              color: "#414EC6",
            }}
          >
            Learn more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}