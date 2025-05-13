"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PersonalLoansPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Add Header component */}
      <Header />
      
      {/* Header with Background */}
      <div className="relative h-[40vh] w-full mt-16">
        <Image 
          src="/loans/personal-loan.jpg" 
          alt="Personal Loans"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        
        <div className="relative z-20 flex flex-col h-full w-full justify-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[var(--font-playfair)]">
              Personal Loan
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Flexible Terms, Low Interest Rates
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
              <li className="text-gray-700">Personal Loan</li>
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
                Personal Loan
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At AYP Finance Solutions, we understand that life's important moments often come with financial needs. Whether you're looking to renovate your home, consolidate debt, or cover unexpected expenses, our Personal Loans are designed to provide the flexibility and support you need.
              </p>

              <h3 id="why-choose" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Us?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Flexible Loan Terms</h4>
                    <p className="text-gray-700">Life doesn't come with a one-size-fits-all solution, and neither should your loan. We offer a variety of flexible loan terms, allowing you to choose a repayment plan that fits your budget and goals. Whether you prefer a shorter-term loan to pay off quickly or a longer repayment period for lower monthly payments, we have options to suit your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Low Interest Rates</h4>
                    <p className="text-gray-700">We believe in making financial solutions accessible to everyone. That’s why our personal loans come with competitive, low interest rates. You can save more money over time and reduce your overall financial burden, ensuring your loan works in your favor, not against you.</p>
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
                    <p className="text-gray-700">Applying for a loan with AYP Finance Solutions is straightforward and hassle-free. Our online application process is designed to be quick and simple, allowing you to easily submit the necessary information. Our team will guide you through every step, ensuring you have all the support you need to complete your application.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Seamless Approval and Disbursement</h4>
                    <p className="text-gray-700">Once your loan application is submitted, we work quickly to get it approved. Our team processes applications efficiently, ensuring you receive the funds you need without unnecessary delays. Whether you're consolidating debt or covering personal expenses, we make sure the approval process is smooth and quick.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Customized Loan Solutions</h4>
                    <p className="text-gray-700">We know that no two clients are alike. That’s why we offer customized loan solutions tailored to your specific financial situation. Our loan specialists take the time to understand your needs, offering personalized recommendations that help you achieve your financial goals without added stress.</p>
                  </div>
                </div>
              </div>
              
              <h3 id="loan-options" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Personal Loan Options</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Debt Consolidation Loans</h4>
                  <p className="text-gray-700 mb-3">If you're looking to consolidate high-interest debts into a single, manageable payment, our personal loans offer a perfect solution.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Simplify your finances with a single monthly payment</li>
                    <li>Potentially reduce your interest costs</li>
                    <li>Improve your credit score over time</li>
                    <li>Create a clear path to becoming debt-free</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Home Renovation Financing</h4>
                  <p className="text-gray-700 mb-3">Your home is one of your most valuable assets, and improving it can significantly increase its value.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Renovate kitchens and bathrooms</li>
                    <li>Add new living spaces or bedrooms</li>
                    <li>Make energy-efficient upgrades</li>
                    <li>Enhance your home's curb appeal</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Major Life Expenses</h4>
                  <p className="text-gray-700 mb-3">Get financial support for important life events and major purchases.</p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Wedding expenses</li>
                    <li>Education costs and student loans</li>
                    <li>Medical procedures</li>
                    <li>Travel and vacation financing</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h3 id="application-process" className="text-xl font-bold text-gray-900 mb-3">How to Apply for a Personal Loan</h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                    <div>
                      <h4 className="font-semibold">Submit Your Application</h4>
                      <p>Fill out our easy online application form, providing basic information about your financial situation and the loan purpose.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                    <div>
                      <h4 className="font-semibold">Loan Review</h4>
                      <p>Our experts will review your application to determine the best loan options available to you.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                    <div>
                      <h4 className="font-semibold">Loan Approval and Terms Agreement</h4>
                      <p>Once approved, you'll receive a loan offer with clear terms and conditions. We'll walk you through the details and help you make an informed decision.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
                    <div>
                      <h4 className="font-semibold">Receive Your Funds</h4>
                      <p>After you accept the loan terms, funds are disbursed promptly, so you can start using them for your goals.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">List of Documents</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Aadhar Card</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Pan Card</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Email address</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Last 6 months bank statement</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Latest 3 months salary slip</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Office ID card</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> One passport size photo</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Form 16</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-blue-600">•</span> Loan schedules if any</li>


                </ul>
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
            Our team is ready to help you find the perfect personal loan solution for your needs.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
            Contact Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 
