"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomeLoansPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Add Header component */}
      <Header />

      {/* Header with Background */}
      <div className="relative h-[40vh] w-full mt-16">
        <Image 
          src="/loans/home-loan.jpg" 
          alt="Home Loans"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        
        <div className="relative z-20 flex flex-col h-full w-full justify-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[var(--font-playfair)]">
              Home Loan Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Turn your dream home into a reality with our customized mortgage solutions
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
              <li className="text-gray-700">Home Loans</li>
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
                Home Loan Solutions
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Turn your dream home into a reality with our customized mortgage loan solutions. We offer competitive 
                rates and flexible repayment options to ensure the loan fits your financial needs. Whether you're a 
                first-time homebuyer or looking to refinance, our team is here to guide you through every step, making 
                the home loan process simple and affordable.
              </p>

              <h3 id="why-choose" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Home Loan Solutions?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Competitive Rates</h4>
                    <p className="text-gray-700">We offer some of the most competitive mortgage rates in the market, helping you save money over the life of your loan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Flexible Repayment Options</h4>
                    <p className="text-gray-700">Choose from a variety of repayment terms that fit your budget and financial goals, whether you want to pay off your home faster or keep monthly payments lower.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Expert Guidance</h4>
                    <p className="text-gray-700">Our mortgage specialists provide personalized guidance throughout the home buying or refinancing process, ensuring you understand each step and make informed decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Simplified Process</h4>
                    <p className="text-gray-700">We've streamlined the mortgage application and approval process to reduce paperwork and stress, making your journey to homeownership as smooth as possible.</p>
                  </div>
                </div>
              </div>
              
              <h3 id="loan-options" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Home Loan Options</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">First-Time Homebuyer Programs</h4>
                  <p className="text-gray-700 mb-3">Special mortgage options designed specifically for first-time homebuyers with competitive rates and lower down payment requirements.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Down payments as low as 3% for qualified buyers</li>
                    <li>Assistance with closing costs</li>
                    <li>Educational resources for new homeowners</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Conventional Mortgages</h4>
                  <p className="text-gray-700 mb-3">Traditional fixed-rate and adjustable-rate mortgages with competitive terms.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Fixed-rate mortgages for 15, 20, or 30 years</li>
                    <li>Adjustable-rate options with lower initial rates</li>
                    <li>Jumbo loans for higher-value properties</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Refinancing Solutions</h4>
                  <p className="text-gray-700 mb-3">Options to help lower your interest rate, reduce monthly payments, or access your home's equity.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Rate and term refinancing to lower your interest rate</li>
                    <li>Cash-out refinancing to access home equity</li>
                    <li>Debt consolidation refinancing to simplify your finances</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Government-Backed Loans</h4>
                  <p className="text-gray-700 mb-3">FHA, VA, and USDA loan options with flexible qualification requirements.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>FHA loans with down payments as low as 3.5%</li>
                    <li>VA loans for eligible veterans with no down payment</li>
                    <li>USDA loans for rural property purchases</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h3 id="loan-process" className="text-xl font-bold text-gray-900 mb-3">The Home Loan Process</h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                    <div>
                      <h4 className="font-semibold">Initial Consultation</h4>
                      <p>Meet with our mortgage specialists to discuss your homebuying goals and financial situation to determine the best loan options for you.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                    <div>
                      <h4 className="font-semibold">Pre-Approval</h4>
                      <p>Get pre-approved for a mortgage to understand your budget and strengthen your position when making offers on homes.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                    <div>
                      <h4 className="font-semibold">Home Search</h4>
                      <p>Work with a real estate agent to find a home that meets your needs and falls within your pre-approved budget.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                    <div>
                      <h4 className="font-semibold">Loan Processing</h4>
                      <p>Once your offer is accepted, our team will guide you through the full mortgage application process, including documentation and verification.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
                    <div>
                      <h4 className="font-semibold">Closing</h4>
                      <p>Review and sign your final loan documents, pay closing costs, and receive the keys to your new home.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#why-choose" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-blue-600 pl-3">
                    Why Choose Our Home Loan Solutions?
                  </a>
                  <a href="#loan-options" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    Our Home Loan Options
                  </a>
                  <a href="#loan-process" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    The Home Loan Process
                  </a>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
                  <p className="text-gray-700 mb-4">
                    Our mortgage specialists are here to help you find the right home loan solution.
                  </p>
                  <a href="tel:+15551234567" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mortgage Calculator</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Use our <Link href="/tools/mortgage-calculator" className="text-blue-600 hover:underline">mortgage calculator</Link> to estimate your monthly payments based on loan amount, interest rate, and term.
                  </p>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/faqs#home-loans" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Home Loan FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/home-buying-guide" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Home Buying Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Contact a Mortgage Specialist
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
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-playfair)]">Ready to Make Your Dream Home a Reality?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our mortgage specialists are ready to help you find the perfect home loan solution tailored to your unique needs and financial goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
              Contact Us Today
            </Link>
            <Link href="/tools/mortgage-calculator" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
              Use Mortgage Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Add Footer at the end */}
      <Footer />
    </div>
  );
} 