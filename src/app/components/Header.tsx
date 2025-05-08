"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate header style based on props and scroll state
  const headerStyle = transparent
    ? scrolled
      ? 'backdrop-blur-sm bg-black/20 shadow-lg py-3' // Transparent but scrolled
      : 'bg-transparent py-6' // Fully transparent at top
    : 'bg-white shadow-lg py-3'; // Solid everywhere else
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 transition-all duration-300 ${headerStyle}`}>
      <div className="flex items-center">
        <Link href="/">
          <div className="h-12 w-auto relative">
            <svg width="120" height="40" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="fill-current">
              {/* AYP Boxes */}
              <rect x="20" y="30" width="60" height="60" rx="5" fill="#111" />
              <rect x="90" y="30" width="60" height="60" rx="5" fill="#a81c1c" />
              <rect x="160" y="30" width="60" height="60" rx="5" fill="#111" />
              
              {/* AYP Letters */}
              <text x="50" y="75" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">A</text>
              <text x="120" y="75" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">Y</text>
              <text x="190" y="75" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">P</text>
              
              {/* Vertical line */}
              <line x1="240" y1="30" x2="240" y2="90" stroke={transparent && !scrolled ? "#111" : "#111"} strokeWidth="2" />
              
              {/* FINANCE SOLUTIONS text */}
              <text x="250" y="50" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill={transparent && !scrolled ? "#111" : "#111"}>FINANCE</text>
              <text x="250" y="85" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#a81c1c">SOLUTIONS</text>
              
              {/* Tagline */}
              <text x="250" y="105" fontFamily="Arial, sans-serif" fontSize="12" fill={transparent && !scrolled ? "#111" : "#111"}>SOLUTIONS YOU CAN BANK ON</text>
            </svg>
          </div>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/#about" className="text-gray-900 hover:text-blue-600 font-medium">About Us</Link>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button className="flex items-center text-gray-900 hover:text-blue-600 font-medium">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-1 divide-y divide-gray-100">
              <div className="px-4 py-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-800">Loan Services</p>
              </div>
              <div className="py-1">
                <Link href="/services/car-loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car Loans</Link>
                <Link href="/services/home-loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Loans</Link>
                <Link href="/services/personal-loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Loans</Link>
                <Link href="/services/business-loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Business Loans</Link>
                <Link href="/services/insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Insurance</Link>
              </div>
              {/* <div className="px-4 py-3 bg-gray-50">
                <p className="text-sm font-medium text-gray-800">Other Services</p>
              </div>
              <div className="py-1">
                <Link href="/loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Loans</Link>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* <Link href="/#faq" className="text-white hover:text-gray-300 font-medium">FAQ</Link> */}
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-7 rounded-md transition-all shadow-lg hover:shadow-xl">
          Contact Us
        </Link>
      </nav>
      
      {/* Mobile menu icon - hidden on desktop */}
      <div className="md:hidden">
        <button className="text-gray-900 focus:outline-none" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex justify-end md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-72 max-w-full bg-white h-full shadow-2xl rounded-l-2xl p-0 flex flex-col space-y-0 transform translate-x-0 transition-transform duration-300 animate-slide-in" onClick={e => e.stopPropagation()}>
            {/* Close Button Only */}
            <div className="flex items-center justify-end px-6 py-4 border-b border-gray-100">
              <button className="ml-2 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-2 px-6 py-6">
              <Link href="/#about" className="text-gray-900 hover:text-blue-600 font-semibold py-3 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <div>
                <div className="text-gray-900 font-semibold mb-1">Services</div>
                <div className="flex flex-col space-y-1 pl-2">
                  <Link href="/services/car-loans" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Car Loans</Link>
                  <Link href="/services/home-loans" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Home Loans</Link>
                  <Link href="/services/personal-loans" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Personal Loans</Link>
                  <Link href="/services/business-loans" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Business Loans</Link>
                  <Link href="/services/insurance" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Insurance</Link>
                  {/* <Link href="/loans" className="text-gray-700 hover:text-blue-600 py-2 px-2 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>All Loans</Link> */}
                </div>
              </div>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-2 rounded-lg transition-all shadow-lg hover:shadow-xl text-center mt-4" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 