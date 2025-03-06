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
//           <Link to="/" className="text-[#475467] hover:text-[#475467]/80 font-semibold" size="lg" hierarchy="Link gray" icon="Default" state="Default">
//             Home
//           </Link>

//           <button
//             className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
//             onClick={() => setServicesOpen(!servicesOpen)}
//             size="lg" hierarchy="Link gray" icon="Default" state="Default"
//             icon-leading={false} icon-trailing={true} icon-trailing-swap="chevron-down"
//           >
//             Services <ChevronDown className="ml-1 h-4 w-4" />
//           </button>

//           <button
//             className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
//             onClick={() => setAboutOpen(!aboutOpen)}
//             size="lg" hierarchy="Link gray" icon="Default" state="Default"
//             icon-leading={false} icon-trailing={true} icon-trailing-swap="chevron-down"
//           >
//             About <ChevronDown className="ml-1 h-4 w-4" />
//           </button>

//           <Link to="/contact" className="text-[#475467] hover:text-[#475467]/80 font-semibold" size="lg" hierarchy="Link gray" icon="Default" state="Default">
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
import { ChevronDown } from "lucide-react";
import logo from "../assets/type=header.png"; // Adjust the path to your assets folder

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="w-full max-w-full h-[80px] py-4 px-10 flex items-center bg-white top-0 z-50">
      <div className="flex items-center" style={{ width: '597px', height: '28px', gap: '40px' }}>
        {/* Logo and Brand */}
        <div className="flex items-center" style={{ width: '197px', height: '28px' }}>
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" style={{ width: '360px', height: '24px', gap: '32px' }}>
          <Link to="/" className="text-[#475467] hover:text-[#475467]/80 font-semibold">
            Home
          </Link>

          <Link
            to="/services"
            className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </Link>

          <Link
            to="/about"
            className="flex items-center text-[#475467] hover:text-[#475467]/80 font-semibold"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            About <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
          </Link>

          <Link to="/contact" className="text-[#475467] hover:text-[#475467]/80 font-semibold">
            Contact
          </Link>
        </nav>
      </div>

      {/* Contact Us Button */}
      <Link
        to="/contact-us"
        className="ml-auto bg-[#1D315F] text-white px-5 py-2 rounded-md hover:bg-[#1D315F]/90 transition-colors"
        style={{ width: '120px', height: '44px', gap: '12px' }}
      >
        Contact Us
      </Link>
    </header>
  );
}