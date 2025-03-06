// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown } from "lucide-react";
// import logo from "../assets/type=header.png"; // Adjust the path to your assets folder

// export default function Navbar() {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);

//   return (
//     <header className="w-full max-w-full h-[80px] py-4 px-10 flex items-center bg-white top-0 z-50">
//       <div className="flex items-center" style={{ width: '597px', height: '28px', gap: '40px' }}>
//         {/* Logo and Brand */}
//         <div className="flex items-center" style={{ width: '197px', height: '28px' }}>
//           <img src={logo} alt="Logo" className="w-full h-full" />
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center space-x-8" style={{ width: '360px', height: '24px', gap: '32px' }}>
//           <Link to="/" className="text-[#475467] hover:text-[#475467]/80 font-semibold">
//             Home
//           </Link>

//           <Link
//             to="/services"
//             className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
//           </Link>

//           <Link
//             to="/about"
//             className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
//             onMouseEnter={() => setAboutOpen(true)}
//             onMouseLeave={() => setAboutOpen(false)}
//           >
//             About <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
//           </Link>

//           <Link to="/contact" className="text-[#475467] hover:text-[#475467]/80 font-semibold">
//             Contact
//           </Link>
//         </nav>
//       </div>

//       {/* Contact Us Button */}
//       <Link
//         to="/contact-us"
//         className="ml-auto bg-[#1D315F] text-white px-5 py-2 rounded-md hover:bg-[#1D315F]/90 transition-colors"
//         style={{ width: '120px', height: '44px', gap: '12px' }}
//       >
//         Contact Us
//       </Link>
//     </header>
//   );
// }






import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/type=header.png";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-full h-auto min-h-[80px] py-4 px-4 sm:px-6 md:px-10 flex flex-wrap items-center justify-between bg-white top-0 z-50">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-auto h-7" />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden ml-auto mr-2" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Contact Us Button - Mobile Position */}
      <Link
        to="/contact-us"
        className="md:ml-auto bg-[#1D315F] text-white px-4 py-2 rounded-md hover:bg-[#1D315F]/90 transition-colors text-center text-sm sm:text-base whitespace-nowrap"
      >
        Contact Us
      </Link>

      {/* Navigation Links - Desktop and Mobile */}
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto md:items-center md:space-x-8 mt-4 md:mt-0 order-last md:order-none`}>
        <Link to="/" className="text-[#475467] hover:text-[#475467]/80 font-semibold py-2 md:py-0">
          Home
        </Link>

        <div className="relative">
          <Link
            to="/services"
            className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold py-2 md:py-0"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </Link>
          {/* Services dropdown could be added here */}
        </div>

        <div className="relative">
          <Link
            to="/about"
            className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold py-2 md:py-0"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            About <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
          </Link>
          {/* About dropdown could be added here */}
        </div>

        <Link to="/contact" className="text-[#475467] hover:text-[#475467]/80 font-semibold py-2 md:py-0">
          Contact
        </Link>
      </nav>
    </header>
  );
}