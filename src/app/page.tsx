"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Sticky Header - changes background on scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="text-3xl font-[var(--font-playfair)] text-white font-bold">
          <h1>Ayp Financial</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-gray-300 font-medium">About Us</a>
          <a href="#services" className="text-white hover:text-gray-300 font-medium">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300 font-medium">Contact Us</a>
          <a href="#faq" className="text-white hover:text-gray-300 font-medium">FAQ</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-7 rounded-md transition-all shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow pt-24">
        <section className="relative h-screen w-full">
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image 
              src="/finance-bg.jpg" 
              alt="Financial services background"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-900/90 z-10"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-[var(--font-playfair)]">
              Your Gateway to<br />
              <span className="border-b-4 border-white pb-2">Financial Solutions</span>
            </h2>
            
            <p className="text-white max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
              Ayp Financial Solutions simplifies access to car loans, personal loans, business loans,
              home loans, and credit cards. We connect you with leading financial institutions,
              providing expert guidance and a seamless application process. Let us help you
              achieve your financial goals with transparent and personalized service.
            </p>
            
            <div className="flex w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg text-gray-700 font-medium border-0"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-r-lg transition-all shadow-lg hover:shadow-xl">
                Sign up
              </button>
            </div>
          </div>
        </section>

        {/* Our Mission and Values Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/team-meeting.jpg"
                  alt="Team meeting at Ayp Financial"
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              {/* Right Column - Content */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-gray-900 font-[var(--font-playfair)]">
                  Our Mission and Values
                </h2>
                
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                  At Ayp Financial Solutions, we are committed to transparency,
                  efficiency, and personalized service. Our mission is to empower clients
                  to achieve their financial goals through expert guidance and tailored
                  solutions.
                </p>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-8">
                  {/* Stat 1 */}
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">100</h3>
                    <p className="text-xl font-medium text-gray-800 mb-1">clients served</p>
                    <p className="text-gray-600">We have successfully assisted over 100 clients in achieving their financial dreams.</p>
                  </div>
                  
                  {/* Stat 2 */}
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">20</h3>
                    <p className="text-xl font-medium text-gray-800 mb-1">team members</p>
                    <p className="text-gray-600">Our dedicated team consists of 20 professionals, each committed to providing exceptional service.</p>
                  </div>
                  
                  {/* Stat 3 */}
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">50</h3>
                    <p className="text-xl font-medium text-gray-800 mb-1">years</p>
                    <p className="text-gray-600">With a combined experience of 50 years in financial services.</p>
                  </div>
                  
                  {/* Stat 4 */}
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">10</h3>
                    <p className="text-xl font-medium text-gray-800 mb-1">awards</p>
                    <p className="text-gray-600">We've received 10 industry awards for excellence in financial services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Loan Options Section */}
        <section id="services" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Heading and Description */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
                  Explore Our Diverse <em className="font-italic">Loan Options</em> for Your Financial Needs
                </h2>
              </div>
              
              <div>
                <p className="text-lg leading-relaxed text-gray-300">
                  At Ayp Financial Solutions, we understand that everyone's financial
                  needs are unique. That's why we offer a comprehensive range of
                  loan products to suit various requirements. Whether you're looking
                  to purchase a new car, fund your personal goals, or expand your
                  business, we have a loan solution for you. Let us help you navigate
                  the options and find the perfect fit for your situation.
                </p>
              </div>
            </div>
            
            {/* Loan Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Car Loans */}
              <div className="rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all shadow-xl group">
                <div className="relative h-64">
                  <Image
                    src="/loans/car-loan.jpg"
                    alt="Car Loans"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold">Car Loans</h3>
                    <p className="mt-2 text-blue-300">Fast approvals, competitive rates</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Drive away in your dream car with our flexible financing options. 
                    We offer competitive rates, quick approval processes, and personalized terms.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Personal Loans */}
              <div className="rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all shadow-xl group">
                <div className="relative h-64">
                  <Image
                    src="/loans/home-loan.jpg"
                    alt="Personal and Home Loans"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold">Personal & Home Loans</h3>
                    <p className="mt-2 text-blue-300">Flexible terms, low interest rates</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Get the funds you need for life's big moments. From home renovations 
                    to debt consolidation, our personal loans offer flexibility and peace of mind.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Business Loans */}
              <div className="rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all shadow-xl group">
                <div className="relative h-64">
                  <Image
                    src="/loans/business-loan.jpg"
                    alt="Business Loans"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold">Business Loans</h3>
                    <p className="mt-2 text-blue-300">Tailored for growth and expansion</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    Fuel your business growth with our specialized financing solutions. 
                    From startups to established enterprises, we provide the capital you need to thrive.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Financial Services Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[var(--font-playfair)]">
                Our Comprehensive Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide expert guidance and support at every stage of your financial journey.
                From application to approval, our team ensures a seamless experience.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-60">
                  <Image
                    src="/services/loan-application.jpg"
                    alt="Expert Loan Application Assistance"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Expert Loan Application Assistance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We simplify the loan application process, providing expert guidance from
                    documentation to submission, increasing your approval chances.
                  </p>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-60">
                  <Image
                    src="/services/financial-consultation.jpg"
                    alt="Personalized Financial Consultations"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Personalized Financial Consultations
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get tailored recommendations for car loans, personal loans, and credit cards,
                    ensuring informed decisions for better financial outcomes.
                  </p>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-60">
                  <Image
                    src="/services/financial-planning.jpg"
                    alt="Comprehensive Financial Planning"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Comprehensive Financial Planning
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We offer in-depth financial planning services to help you achieve your long-term
                    financial goals, from debt management to retirement planning.
                  </p>
                </div>
              </div>
              
              {/* Service 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-60">
                  <Image
                    src="/services/home-loan.jpg"
                    alt="Home Loan Solutions"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Home Loan Solutions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Unlock your dream home with our tailored mortgage loan solutions, providing competitive
                    rates and flexible repayment options to suit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Don't just take our word for it. Hear from some of our satisfied clients who have 
                successfully achieved their financial goals with our assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group hover:bg-gray-700 transition-all">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden mr-4">
                      <Image 
                        src="/testimonials/client1.jpg"
                        alt="Michael Thompson"
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Michael Thompson</h4>
                      <p className="text-blue-300">Home Loan Client</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "Ayp Financial made the home loan process incredibly easy. Their team guided me 
                    through every step and found me the best rates available. I couldn't be happier 
                    with the service I received."
                  </p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group hover:bg-gray-700 transition-all">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden mr-4">
                      <Image 
                        src="/testimonials/client2.jpg"
                        alt="Sarah Johnson"
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Sarah Johnson</h4>
                      <p className="text-blue-300">Financial Planning Client</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "The financial planning services at Ayp have transformed my approach to personal 
                    finance. Their expert team helped me create a comprehensive plan that's already 
                    showing results. Highly recommended!"
                  </p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl group hover:bg-gray-700 transition-all">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-lg overflow-hidden mr-4">
                      <Image 
                        src="/testimonials/client3.jpg"
                        alt="David Wilson"
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">David Wilson</h4>
                      <p className="text-blue-300">Business Loan Client</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "I needed a business loan to expand my company, and Ayp Financial delivered beyond 
                    my expectations. They found a solution that perfectly matched my needs with terms 
                    I couldn't find elsewhere."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-lg">
                Read More Success Stories 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[var(--font-playfair)]">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Have questions or ready to explore your financial options? Our team is here to help.
                Reach out through any of the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Email Contact */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">
                  For any inquiries or assistance, feel free to reach out to us via email at
                </p>
                <a href="mailto:contact@aypfinancialsolutions.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  contact@aypfinancialsolutions.com
                </a>
                <p className="text-gray-600 mt-2">
                  Our team is ready to help you with your financial needs.
                </p>
              </div>

              {/* Phone Contact */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">
                  You can contact us directly at
                </p>
                <p className="text-blue-600 font-medium text-xl">+1-555-123-4567</p>
                <p className="text-gray-600 mt-2">
                  Our representatives are available to assist you with any questions or concerns you may have regarding our services.
                </p>
              </div>

              {/* Visit Us */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-3">
                  We are located at
                </p>
                <p className="text-blue-600 font-medium">
                  123 Financial Way, Los Angeles, CA 90001, United States
                </p>
                <p className="text-gray-600 mt-2">
                  Feel free to stop by our office for personalized assistance and consultations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-[var(--font-playfair)]">
                  Common Questions
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Find answers to your most pressing questions about our financial products, 
                  application processes, and how we can assist you.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3">
                {/* Question 1 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleFAQ(0)} 
                    className="flex justify-between items-center w-full px-5 py-3 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium text-gray-900">What types of loans do you offer?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openFAQ === 0 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === 0 && (
                    <div className="px-5 py-3 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-sm md:text-base">
                        We offer a variety of loan products including personal loans, home mortgages, auto loans, 
                        business loans, and specialized financing options. Our team works to find the best rates 
                        and terms based on your specific financial situation and goals.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 2 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleFAQ(1)} 
                    className="flex justify-between items-center w-full px-5 py-3 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium text-gray-900">How does the application process work?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === 1 && (
                    <div className="px-5 py-3 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-sm md:text-base">
                        Our application process is designed to be simple and efficient. It begins with an initial consultation 
                        where we assess your needs and financial situation. We then help you gather the necessary documentation 
                        and submit your application to the most suitable lenders. Our team handles the paperwork and negotiations, 
                        keeping you informed throughout the process until approval and funding.
                      </p>
                    </div>
                  )}
                </div>

                {/* Question 3 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleFAQ(2)} 
                    className="flex justify-between items-center w-full px-5 py-3 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium text-gray-900">What is your commission structure?</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === 2 && (
                    <div className="px-5 py-3 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-sm md:text-base">
                        We maintain transparent fee structures for all our services. For most loan products, our compensation 
                        comes from the lenders we work with, meaning there's no direct cost to you for our loan matching services. 
                        For specialized financial planning services, we offer competitive flat-fee and percentage-based options 
                        detailed during your initial consultation.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-100 pt-16 pb-8">
          <div className="container mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Explore Column */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Explore</h3>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                  <li><a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              {/* Loans Column */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Loans</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Car Loans</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Personal Loans</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business Loans</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home Loans</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Credit Cards</a></li>
                </ul>
              </div>
              
              {/* Contact Column */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
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
                    className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-md"
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
                © 2025 Ayp Financial Solutions. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms and Conditions</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
                
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
      </main>
    </div>
  );
}
