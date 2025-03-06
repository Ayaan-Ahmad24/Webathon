import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, agreeToPolicy: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="inline-block mb-6">
        <span
          style={{
            width: "112px",
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
          Contact Us
        </span>
      </div>

      <h1
        style={{
          fontFamily: "Urbanist",
          fontWeight: 600,
          fontSize: "36px",
          lineHeight: "44px",
          letterSpacing: "-2%",
          color: "#101828",
        }}
        className="text-4xl font-bold mb-4"
      >
        Let's Build the Next Product Together
      </h1>
      <p
        style={{
          fontFamily: "Urbanist",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "30px",
          letterSpacing: "0%",
          color: "#475467",
        }}
        className="text-gray-600 mb-12"
      >
        We'd love to hear from you. Please fill out this form or shoot us an
        email.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Email Section */}
            <div className="text-left">
              <Mail className="h-5 w-5 mb-2" style={{ color: "#1D315F" }} />
              <h3
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  color: "#1D315F",
                }}
                className="text-xl font-semibold"
              >
                Email
              </h3>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#475467",
                }}
                className="text-gray-600 mb-2"
              >
                Our friendly team is here to help.
              </p>
              <a
                href="mailto:hi@cachelogic.tech"
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#415EC6",
                }}
                className="text-blue-600 hover:underline"
              >
                hi@cachelogic.tech
              </a>
            </div>

            {/* Phone Section */}
            <div className="text-left">
              <Phone className="h-5 w-5 mb-2" style={{ color: "#1D315F" }} />
              <h3
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  color: "#1D315F",
                }}
                className="text-xl font-semibold"
              >
                Phone
              </h3>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#475467",
                }}
                className="text-gray-600 mb-2"
              >
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                href="tel:+15550000000"
                style={{
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#415EC6",
                }}
                className="text-blue-600 hover:underline"
              >
                +1 (555) 000-0000
              </a>
            </div>
          </div>

          {/* Office Section */}
          <div className="text-left">
            <MapPin className="h-5 w-5 mb-2" style={{ color: "#1D315F" }} />
            <h3
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "#1D315F",
              }}
              className="text-xl font-semibold"
            >
              Office
            </h3>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                color: "#475467",
              }}
              className="text-gray-600 mb-2"
            >
              Come say hello at our office HQ.
            </p>
            <a
              href="https://maps.google.com/?q=Baltimore+MD"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                color: "#415EC6",
              }}
              className="text-blue-600 hover:underline"
            >
              Building X, Street Y, Baltimore MD
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            width: "560px",
            height: "556px",
            maxWidth: "560px",
            gap: "64px",
            paddingTop: "40px",
            paddingRight: "32px",
            paddingBottom: "40px",
            paddingLeft: "32px",
            borderRadius: "16px",
            background: "#F9FAFB",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm min-h-[120px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="agreeToPolicy"
                name="agreeToPolicy"
                type="checkbox"
                checked={formData.agreeToPolicy}
                onChange={handleCheckboxChange}
                required
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="agreeToPolicy" className="text-sm text-gray-600">
                You agree to our friendly privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-medium py-2 px-4 rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}