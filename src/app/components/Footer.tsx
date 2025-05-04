"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Explore Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Loans Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Loans</h3>
            <ul className="space-y-3">
              <li><Link href="/services/car-loans" className="text-gray-600 hover:text-blue-600 transition-colors">Car Loans</Link></li>
              <li><Link href="/services/personal-loans" className="text-gray-600 hover:text-blue-600 transition-colors">Personal Loans</Link></li>
              <li><Link href="/services/business-loans" className="text-gray-600 hover:text-blue-600 transition-colors">Business Loans</Link></li>
              <li><Link href="/services/insurance" className="text-gray-600 hover:text-blue-600 transition-colors">Insurance</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Subscribe Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">Stay up-to-date with our latest financial solutions and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white-500 rounded-l-md"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 AYP Financial Solutions. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">Terms and Conditions</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</Link>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 