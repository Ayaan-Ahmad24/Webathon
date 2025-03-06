

import { Phone, Twitter, Linkedin, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e1218] text-white py-16 relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="max-w-xl mb-8 md:mb-0">
            <h1
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "38px",
                letterSpacing: "0%",
                color: "white",
              }}
              className="text-4xl font-medium mb-4"
            >
              Innovating IT solutions for the modern world.
            </h1>
            <p
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "#EAECF0",
              }}
              className="text-gray-300 text-lg"
            >
              Empowering businesses with cutting-edge technology and tailored solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="bg-white text-[#0e1218] px-6 py-4 rounded-md font-medium text-center">
              Discover Our Services
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-6 py-4 rounded-md font-medium flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-12 mx-8"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/assets/Vector 2.svg" alt="Cache Logic Logo" width={32} height={32} />
              <div className="text-[#ffffff] text-3xl">
                Cache Logic
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Cache Logic is a global IT services firm committed to powering your business with innovative tech
              solutions.
            </p>
            <p className="text-gray-500 text-sm">© 2077 Cache Logic. All rights reserved.</p>
          </div>

          {/* Empty Column for spacing on medium screens */}
          <div className="hidden md:block lg:hidden"></div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-400 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-[#3ba8e0]">
                  About us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#3ba8e0]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#3ba8e0]">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#3ba8e0]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start md:justify-end items-start gap-6">
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
            <a href="#" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="bottom-0 left-0 w-full pointer-events-none opacity-10 text-[20vw] font-light tracking-wider text-center overflow-hidden">
        <div
          style={{
            fontFamily: "Urbanist",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "257.1px",
            lineHeight: "471.36px",
            letterSpacing: "-2%",
            textTransform: "lowercase",
            color: "white",
          }}
          className="whitespace-nowrap"
        >
          cache logic
        </div>
      </div>
    </footer>
  );
}