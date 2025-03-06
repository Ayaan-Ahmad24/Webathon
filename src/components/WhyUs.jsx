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
        How does Cache Logic stands out?
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

      {/* Main image - you'll replace the placeholder with your actual image */}
      <div className="mb-16">
        <img
          src="/src/assets/image 3.png"
          alt="Team collaboration around a table with flowcharts and sticky notes"
          style={{
            width: "1069.575439453125px",
            height: "602.5275268554688px",
            borderRadius: "16px",
            top: "-22.26px",
            left: "73.21px",
          }}
          className="w-full object-cover"
        />
      </div>

      {/* Three features section */}
      <div
        className="grid md:grid-cols-3 gap-8"
        style={{
          width: "1216px",
          height: "222px",
          gap: "32px",
        }}
      >
        {/* Feature 1 */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "384px",
            height: "222px",
            minWidth: "320px",
            justifyContent: "space-between",
          }}
        >
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3
            className="text-center mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#101828",
            }}
          >
            Global Reach With Localized Expertise.
          </h3>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              textAlign: "center",
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
              textAlign: "center",
            }}
          >
            Learn more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Feature 2 */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "384px",
            height: "222px",
            minWidth: "320px",
            justifyContent: "space-between",
          }}
        >
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
            className="text-center mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#101828",
            }}
          >
            Dedicated Support To Drive Your Success.
          </h3>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              textAlign: "center",
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
              textAlign: "center",
            }}
          >
            Learn more
            <span className="ml-1 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Feature 3 */}
        <div
          className="flex flex-col items-center"
          style={{
            width: "384px",
            height: "222px",
            minWidth: "320px",
            justifyContent: "space-between",
          }}
        >
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13M12 8H16V12M15.5 3.5V2M19.4393 4.56066L20.5 3.5M20.5103 8.5H22.0103M3 13.3471C3.65194 13.4478 4.31987 13.5 5 13.5C9.38636 13.5 13.2653 11.3276 15.6197 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3
            className="text-center mb-3"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
              color: "#101828",
            }}
          >
            Tailored Solutions For Every Industry.
          </h3>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0%",
              textAlign: "center",
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
              textAlign: "center",
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
