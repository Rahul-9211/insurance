"use client"
import Image from "next/image";
import Link from "next/link";

export default function CarLoansPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Header with Background */}
      <div className="relative h-[40vh] w-full">
        <Image 
          src="/loans/car-loan.jpg" 
          alt="Car Loans"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        
        <div className="relative z-20 flex flex-col h-full w-full justify-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[var(--font-playfair)]">
              Car Loans
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Fast Approvals, Competitive Rates, and Flexible Financing
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
              <li className="text-gray-700">Car Loans</li>
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
                Car Loans at AYP Finance Solutions
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At AYP Finance Solutions, we understand that purchasing a car is an exciting and significant milestone. 
                Whether you're buying your first car, upgrading to a newer model, or refinancing your existing loan, 
                we're here to help make your car ownership dreams a reality. Our car loan options are designed to provide 
                you with the financial flexibility and support you need throughout the entire process.
              </p>

              <h3 id="why-choose" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Car Loans?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Quick and Easy Approvals</h4>
                    <p className="text-gray-700">We know that time is valuable, and waiting for loan approvals can be frustrating. That's why we prioritize fast and efficient approval processes. Our team works closely with leading financial institutions to get you the best deal possible, ensuring that you can focus on finding your ideal car without worrying about lengthy paperwork or delays.</p>
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
                    <p className="text-gray-700">We offer some of the most competitive rates in the market. Our goal is to make sure that your car loan is affordable and manageable. With our low-interest rates, you can save money over the life of your loan, helping you get the most out of your purchase.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Flexible Loan Terms</h4>
                    <p className="text-gray-700">Every individual's financial situation is unique. We offer a range of loan terms tailored to your specific needs and budget. Whether you prefer a shorter repayment term to pay off your loan faster or a longer term for lower monthly payments, we'll work with you to find a plan that fits your lifestyle.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Personalized Loan Options</h4>
                    <p className="text-gray-700">We take the time to understand your financial goals and create a loan that works for you. From determining the right down payment to choosing the ideal loan term, our team will provide personalized recommendations that align with your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Seamless Application Process</h4>
                    <p className="text-gray-700">Our simple, straightforward application process ensures that you can apply for a car loan with ease. We've streamlined everything to minimize paperwork, and our online application platform makes it easy to apply from anywhere.</p>
                  </div>
                </div>
              </div>
              
              <h3 id="loan-options" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Car Loan Options</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">New Car Loans</h4>
                  <p className="text-gray-700 mb-3">Finance your brand-new vehicle with our competitive new car loan rates.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Competitive interest rates starting from 3.99% APR</li>
                    <li>Flexible terms up to 84 months</li>
                    <li>Financing up to 100% of the vehicle's value</li>
                    <li>Fast approval process</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Used Car Loans</h4>
                  <p className="text-gray-700 mb-3">Find the perfect pre-owned vehicle with our used car financing options.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Competitive rates for vehicles up to 10 years old</li>
                    <li>Flexible terms to fit your budget</li>
                    <li>Quick approval process</li>
                    <li>Options for various credit profiles</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Refinancing Options</h4>
                  <p className="text-gray-700 mb-3">Lower your current car payment by refinancing your existing auto loan.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Potentially lower your interest rate</li>
                    <li>Reduce your monthly payments</li>
                    <li>Change your loan term to better suit your needs</li>
                    <li>Simple application process with minimal documentation</li>
                  </ul>
                </div>
              </div>

              <h3 id="how-it-works" className="text-2xl font-bold text-gray-900 mb-4 mt-8">How It Works</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1 text-white font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Apply Online</h4>
                    <p className="text-gray-700">Fill out our simple, secure online application form, which only takes a few minutes. We'll gather essential details to match you with the best loan options based on your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1 text-white font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Get Approved</h4>
                    <p className="text-gray-700">Once you've submitted your application, our team will quickly review it and get back to you with approval, usually within a few hours. We'll provide you with the loan terms and interest rate, allowing you to make an informed decision.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1 text-white font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Choose Your Loan</h4>
                    <p className="text-gray-700">Once approved, you can choose the car loan terms that suit you best. Our team will explain all your options and help you find a plan that fits your budget and goals.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1 text-white font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Drive Away</h4>
                    <p className="text-gray-700">Once you've finalized your loan, you'll receive the funds, and you can proceed to pick up your car. We'll ensure the entire process is as seamless and stress-free as possible.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#why-choose" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-blue-600 pl-3">
                    Why Choose Our Car Loans?
                  </a>
                  <a href="#loan-options" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    Our Car Loan Options
                  </a>
                  <a href="#how-it-works" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    How It Works
                  </a>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
                  <p className="text-gray-700 mb-4">
                    Our financial advisors are here to help you with your car loan needs.
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
                      <Link href="/services/car-loans" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Car Loan Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Car Loan FAQs
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Contact a Loan Specialist
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
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-playfair)]">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our team is ready to help you find the perfect car loan solution for your needs.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}