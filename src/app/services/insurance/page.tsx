"use client"
import Image from "next/image";
import Link from "next/link";

export default function InsurancePage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Header with Background */}
      <div className="relative h-[40vh] w-full">
        <Image 
          src="/loans/insurance.jpg" 
          alt="Insurance Solutions"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        
        <div className="relative z-20 flex flex-col h-full w-full justify-center px-6 md:px-12">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[var(--font-playfair)]">
              Insurance Services
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Protect What Matters Most
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
              <li className="text-gray-700">Insurance</li>
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
                Comprehensive Insurance Solutions
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                At AYP Finance Solutions, we understand that life is unpredictable, and having the right insurance 
                coverage can provide the security you need in times of uncertainty. Our comprehensive insurance 
                services are designed to safeguard your assets, health, and future, offering a wide range of 
                affordable and reliable coverage options.
              </p>

              <h3 id="offerings" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Insurance Offerings</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="life" className="text-xl font-semibold text-gray-900 mb-2">Life Insurance</h4>
                  <p className="text-gray-700 mb-3">Secure the financial future of your loved ones with our life insurance plans. Whether you're looking for term life or whole life insurance, we offer policies that provide peace of mind, ensuring your family is protected no matter what.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="health" className="text-xl font-semibold text-gray-900 mb-2">Health Insurance</h4>
                  <p className="text-gray-700 mb-3">Protect your well-being with health insurance coverage that suits your needs. We offer flexible plans, from basic coverage to more comprehensive options, designed to help you manage medical expenses and access quality healthcare services.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="home" className="text-xl font-semibold text-gray-900 mb-2">Home Insurance</h4>
                  <p className="text-gray-700 mb-3">Safeguard your home and belongings with our home insurance policies. Whether you own or rent, we offer coverage against natural disasters, theft, fire, and other unexpected events, ensuring your property is protected.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="auto" className="text-xl font-semibold text-gray-900 mb-2">Auto Insurance</h4>
                  <p className="text-gray-700 mb-3">Keep your vehicle safe on the road with our auto insurance solutions. We offer a range of policies, including liability, collision, and comprehensive coverage, giving you the protection you need in case of accidents or unforeseen damage.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="travel" className="text-xl font-semibold text-gray-900 mb-2">Travel Insurance</h4>
                  <p className="text-gray-700 mb-3">Travel with confidence knowing you're covered with our travel insurance options. From trip cancellations to medical emergencies abroad, we provide comprehensive coverage to ensure a stress-free journey wherever you go.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="business" className="text-xl font-semibold text-gray-900 mb-2">Business Insurance</h4>
                  <p className="text-gray-700 mb-3">Protect your business with tailored insurance plans designed for entrepreneurs, startups, and established enterprises. Our business insurance solutions include property, liability, workers' compensation, and more, to keep your company safe from potential risks.</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="critical" className="text-xl font-semibold text-gray-900 mb-2">Critical Illness Insurance</h4>
                  <p className="text-gray-700 mb-3">Gain financial support during challenging times with critical illness insurance. If you're diagnosed with a serious condition, this coverage provides a lump sum to help with treatment costs and other financial needs, so you can focus on recovery.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="disability" className="text-xl font-semibold text-gray-900 mb-2">Disability Insurance</h4>
                  <p className="text-gray-700 mb-3">Ensure income protection in the event of an illness or injury that prevents you from working. Our disability insurance provides a safety net, covering a portion of your income if you're unable to work due to medical reasons.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="pet" className="text-xl font-semibold text-gray-900 mb-2">Pet Insurance</h4>
                  <p className="text-gray-700 mb-3">Keep your pets healthy and safe with our pet insurance plans. Cover medical expenses, surgeries, and emergencies, giving you peace of mind that your furry friends are protected.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 id="longterm" className="text-xl font-semibold text-gray-900 mb-2">Long-Term Care Insurance</h4>
                  <p className="text-gray-700 mb-3">Prepare for the future with long-term care insurance, which helps cover costs associated with extended care services, such as nursing homes or home healthcare, ensuring you're supported in your later years.</p>
                </div>
              </div>
              
              <h3 id="why-choose" className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Insurance Services?</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Comprehensive Coverage</h4>
                    <p className="text-gray-700">We offer a wide range of insurance products designed to meet your specific needs, whether personal or business-related.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Customizable Plans</h4>
                    <p className="text-gray-700">Our insurance plans are flexible, allowing you to choose the coverage that works best for you and your budget.</p>
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
                    <p className="text-gray-700">Our team of insurance experts is here to guide you through your options and help you choose the right policies to provide the protection you deserve.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Affordable Rates</h4>
                    <p className="text-gray-700">We work with leading insurance providers to offer competitive rates, ensuring you receive the best coverage at the best price.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Reliable Claims Support</h4>
                    <p className="text-gray-700">In the event of a claim, we provide prompt, reliable support to ensure your needs are met quickly and efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#offerings" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-blue-600 pl-3">
                    Our Insurance Offerings
                  </a>
                  <a href="#why-choose" className="block text-blue-600 hover:text-blue-800 hover:underline py-1 border-l-4 border-transparent hover:border-blue-600 pl-3">
                    Why Choose Our Insurance Services?
                  </a>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
                  <p className="text-gray-700 mb-4">
                    Our insurance experts are here to help you find the right coverage for your needs.
                  </p>
                  <a href="tel:+15551234567" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </a>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Insurance Types</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/services/insurance#life" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Life Insurance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/insurance#health" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Health Insurance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/insurance#home" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Home Insurance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/insurance#auto" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Auto Insurance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/insurance#business" className="text-blue-600 hover:text-blue-800 hover:underline">
                        Business Insurance
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Get a Free Quote</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    Speak with an insurance specialist to get a personalized quote for your coverage needs.
                  </p>
                  <Link 
                    href="/contact?service=insurance" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md inline-block text-center"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-playfair)]">Ready to Protect What Matters Most?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let us help you find the right insurance coverage to give you peace of mind and security in every aspect of life. Contact us today to explore your insurance options and start safeguarding your future.
          </p>
          <Link href="/#contact" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors shadow-md">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 