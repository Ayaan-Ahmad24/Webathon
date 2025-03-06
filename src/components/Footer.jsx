export default function CacheLogicFooter() {
    return (
      <div className="bg-[#0d111a] text-white min-h-screen flex flex-col relative overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16 md:py-24 flex-1">
          <div className="flex justify-between items-start">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Innovating IT solutions for the modern world.</h1>
              <p className="text-lg text-gray-300">
                Empowering businesses with cutting-edge technology and tailored solutions.
              </p>
            </div>
  
            <div className="hidden md:flex gap-4">
              <a href="#" className="bg-white text-[#0d111a] px-6 py-3 rounded-md font-medium">
                Discover Our Services
              </a>
              <a href="#" className="border border-white px-6 py-3 rounded-md font-medium flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-800 w-full"></div>
  
        {/* Footer Section */}
        <footer className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-[#3b9eff]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M8 4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" />
                    <path d="M22 12h-4v-4h4v4z" fill="#0d111a" />
                  </svg>
                </div>
                <span className="text-2xl font-light">Cache Logic</span>
              </div>
              <p className="text-gray-300 text-sm">
                Cache Logic is a global IT services firm committed to powering your business with innovative tech
                solutions.
              </p>
              <p className="text-gray-500 text-sm pt-4">© 2077 Cache Logic. All rights reserved.</p>
            </div>
  
            {/* Navigation Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-gray-400 text-sm mb-6">Company</h3>
              <nav className="flex flex-col space-y-4 text-sm">
                <a href="#" className="hover:text-[#3b9eff]">
                  About us
                </a>
                <a href="#" className="hover:text-[#3b9eff]">
                  Careers
                </a>
                <a href="#" className="hover:text-[#3b9eff]">
                  News
                </a>
                <a href="#" className="hover:text-[#3b9eff]">
                  Contact
                </a>
              </nav>
            </div>
  
            {/* Social Media Icons */}
            <div className="md:col-span-4 flex justify-end items-end gap-6">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"></path>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
  
        {/* Background Watermark */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-10 text-[20vw] font-light tracking-wider text-center overflow-hidden">
          <div className="whitespace-nowrap text-gray-500">cache logic</div>
        </div>
      </div>
    )
}  