"use client"
import Image from "next/image";
import Link from "next/link";

export default function BusinessLoansPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Header with Background */}
      <div className="relative h-[40vh] w-full">
        <Image 
          src="/loans/business-loan.jpg" 
          alt="Business Loans"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        
        <div className="relative z-20 flex flex-col h-full w-full justify-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[var(--font-playfair)]">
              Business Loans
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Fuel Your Growth and Expansion
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link href="/#services" className="text-blue-600 hover:underline">Services</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li className="text-gray-700">Business Loans</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-[var(--font-playfair)]">
                Business Financing Solutions
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At AYP Finance Solutions, we understand that every business has unique needs, especially when it comes to 
                growth and expansion. Whether you're a startup looking to make your mark or an established company aiming 
                for new heights, our business loans are designed to provide the financial support you need at every stage 
                of your journey.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                We offer a range of flexible financing options that are tailored to suit your specific business 
                requirements. From securing working capital to funding large-scale expansions, our team is committed 
                to helping you achieve your business goals with ease.
              </p>

              <h3 id="why-choose" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Business Loans?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Flexible Loan Options</h4>
                    <p className="text-gray-700">We provide a variety of loan products to fit businesses of all sizes. Whether you need a small loan to manage cash flow or a larger loan for expansion, we've got you covered.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Quick and Easy Application Process</h4>
                    <p className="text-gray-700">Our streamlined application process means you won't have to deal with lengthy paperwork or delays. Our team guides you through every step, ensuring a fast and efficient experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Competitive Interest Rates</h4>
                    <p className="text-gray-700">We offer affordable interest rates to make financing more accessible for your business. Our goal is to provide you with the best possible terms to help you grow without excessive financial burden.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Personalized Support</h4>
                    <p className="text-gray-700">We don't just provide loans; we provide solutions. Our experts work with you to understand your business, offering advice and support to ensure your financing aligns with your growth strategy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Tailored to Your Needs</h4>
                    <p className="text-gray-700">Whether you're investing in equipment, expanding operations, hiring new staff, or launching a new product line, our business loans are customizable to support your specific objectives.</p>
                  </div>
                </div>
              </div>
              
              <h3 id="how-we-help" className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Help Businesses Grow</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Startups</h4>
                  <p className="text-gray-700 mb-3">If you're in the early stages of your business, our startup loans provide the capital needed to bring your vision to life. We understand the challenges of getting off the ground, and we're here to help you overcome them.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Established Businesses</h4>
                  <p className="text-gray-700 mb-3">For businesses looking to expand, launch new projects, or improve operations, we offer larger loan amounts with flexible terms to support your long-term growth.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry-Specific Solutions</h4>
                  <p className="text-gray-700 mb-3">No matter your industry—whether retail, technology, manufacturing, or services—we offer specialized loan products that align with the unique demands of your sector.</p>
                </div>
              </div>
              
              <h3 id="loan-options" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Business Loan Options We Offer</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Term Loans</h4>
                  <p className="text-gray-700 mb-3">Traditional business loans with fixed or variable interest rates and set repayment schedules.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Loan amounts from $25,000 to $500,000</li>
                    <li>Terms ranging from 1 to 10 years</li>
                    <li>Competitive interest rates based on business creditworthiness</li>
                    <li>Predictable monthly payments for easier budgeting</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Lines of Credit</h4>
                  <p className="text-gray-700 mb-3">Flexible revolving credit that allows you to draw funds as needed up to a predetermined limit.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Credit lines up to $250,000</li>
                    <li>Draw funds only when you need them</li>
                    <li>Pay interest only on the amount used</li>
                    <li>Revolving credit replenishes as you pay down the balance</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Equipment Financing</h4>
                  <p className="text-gray-700 mb-3">Loans specifically designed to help businesses purchase necessary equipment.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Finance up to 100% of equipment value</li>
                    <li>The equipment serves as collateral, potentially making approval easier</li>
                    <li>Terms typically aligned with the expected life of the equipment</li>
                    <li>Potential tax benefits through depreciation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">SBA Loans</h4>
                  <p className="text-gray-700 mb-3">Small Business Administration backed loans with favorable terms for qualifying businesses.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Lower down payments and longer repayment terms</li>
                    <li>Competitive interest rates capped by the SBA</li>
                    <li>Multiple programs available (7(a), 504, microloans)</li>
                    <li>Expert guidance through the complex application process</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Commercial Real Estate Loans</h4>
                  <p className="text-gray-700 mb-3">Financing for purchasing, renovating, or refinancing business property.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Long-term financing options (up to 25 years)</li>
                    <li>Competitive rates for property purchases or refinancing</li>
                    <li>Options for owner-occupied or investment properties</li>
                    <li>Construction and renovation financing available</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h3 id="ayp-advantage" className="text-xl font-bold text-gray-900 mb-3">The AYP Advantage</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparent Terms</h4>
                      <p>We believe in clear and straightforward terms, so you won't encounter hidden fees or surprises down the road.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fast Approvals</h4>
                      <p>With a quick approval process, you can secure the funds you need without unnecessary delays.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ongoing Partnership</h4>
                      <p>We are committed to long-term relationships with our clients. Beyond providing loans, we are here to offer ongoing financial guidance to help your business thrive.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#why-choose" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-blue-600 pl-3">
                    Why Choose Our Business Loans?
                  </a>
                  <a href="#how-we-help" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    How We Help Businesses Grow
                  </a>
                  <a href="#loan-options" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    Business Loan Options
                  </a>
                  <a href="#ayp-advantage" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    The AYP Advantage
                  </a>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
                  <p className="text-gray-700 mb-4">
                    Our business loan experts are here to help you find the right financing solution.
                  </p>
                  <a href="tel:+15551234567" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/tools/business-loan-calculator" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Business Loan Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs#business-loans" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Business Loan FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Schedule a Consultation
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Resources</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/resources/business-planning" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Business Planning Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/cash-flow-management" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Cash Flow Management Tips
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/sba-loan-process" className="text-blue-600 hover:text-blue-800 hover:underline">
                        SBA Loan Process Explained
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-playfair)]">Ready to Turn Your Business Goals into Reality?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let us be the partner you can rely on for growth and expansion—reach out today to learn more about our business loan options.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 