"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Component that uses the search params
function LoansContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>("home");
  
  useEffect(() => {
    // Set the active tab based on URL parameter if it exists
    if (tabParam && ["home", "personal", "car", "education", "business"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  
  const tabs = [
    { id: "home", label: "Home Loans" },
    { id: "personal", label: "Personal Loans" },
    { id: "car", label: "Car Loans" },
    { id: "education", label: "Education Loans" },
    { id: "business", label: "Business Loans" },
  ];
  
  const loanContent = {
    home: {
      title: "Home Loans",
      description: "Our home loans are designed to help you achieve your dream of homeownership with flexible terms and competitive rates.",
      features: [
        "Competitive interest rates starting from 3.5%",
        "Loan terms from 10 to 30 years",
        "Fixed and variable rate options",
        "Fast approval process",
        "No hidden fees",
        "Free loan consultations",
        "Special rates for first-time homebuyers",
        "Refinancing options available"
      ],
      requirements: [
        "Credit score of 620 or higher",
        "Proof of income and employment history",
        "Debt-to-income ratio below 43%",
        "Down payment (varies based on loan type)",
        "Property appraisal documentation"
      ],
      image: "/loans/home-loan.jpg"
    },
    personal: {
      title: "Personal Loans",
      description: "Get the funds you need for life's big moments with our flexible personal loans designed to fit your financial situation.",
      features: [
        "Unsecured loans up to $50,000",
        "Fixed rates starting at 5.99% APR",
        "Loan terms from 12 to 60 months",
        "No early repayment penalties",
        "Quick online application",
        "Funds available within 24-48 hours of approval",
        "Consolidate high-interest debts",
        "Use for any legitimate purpose"
      ],
      requirements: [
        "Credit score of 660 or higher",
        "Stable income verification",
        "Proof of identity and residence",
        "Low debt-to-income ratio",
        "Bank account information for direct deposit"
      ],
      image: "/loans/personal-loan.jpg"
    },
    car: {
      title: "Car Loans",
      description: "Drive away in your dream car with our competitive auto loan options for new and used vehicles.",
      features: [
        "Competitive rates starting from 2.99% APR",
        "Financing for new and used vehicles",
        "Loan terms up to 72 months",
        "Quick pre-approval process",
        "Flexible payment options",
        "No application fees",
        "Refinancing options for existing auto loans",
        "Balloon payment options available"
      ],
      requirements: [
        "Credit score of 600 or higher",
        "Proof of income and employment",
        "Valid driver's license",
        "Vehicle information and valuation",
        "Proof of insurance"
      ],
      image: "/loans/car-loan.jpg"
    },
    education: {
      title: "Education Loans",
      description: "Invest in your future with our education loans designed to cover tuition, books, and living expenses.",
      features: [
        "Low interest rates starting at 4.5% APR",
        "Deferred payment options while in school",
        "Flexible repayment terms up to 15 years",
        "No origination fees",
        "Interest-only payment options",
        "Cover tuition, books, and living expenses",
        "Loan forgiveness programs for certain professions",
        "Special rates for graduate studies"
      ],
      requirements: [
        "Enrollment verification from an accredited institution",
        "Satisfactory academic progress",
        "U.S. citizenship or eligible non-citizen status",
        "Credit check (cosigner may be required for students)",
        "Completed FAFSA for federal loan eligibility"
      ],
      image: "/loans/education-loan.jpg"
    },
    business: {
      title: "Business Loans",
      description: "Fuel your business growth with our specialized financing solutions for startups and established enterprises.",
      features: [
        "Loans from $25,000 to $500,000",
        "Competitive rates based on business profile",
        "Term loans and lines of credit available",
        "Equipment financing options",
        "SBA loan assistance",
        "Working capital solutions",
        "Commercial real estate loans",
        "Merchant cash advances"
      ],
      requirements: [
        "Business plan and financial projections",
        "2+ years in business (flexible for startups)",
        "Business tax returns and financial statements",
        "Good personal and business credit",
        "Collateral requirements vary by loan amount"
      ],
      image: "/loans/business-loan.jpg"
    }
  };
  
  const activeLoan = loanContent[activeTab as keyof typeof loanContent];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-gray-900">
        <Image 
          src={activeLoan.image}
          alt={`${activeLoan.title} banner`}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{activeLoan.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">{activeLoan.description}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-gray-900 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 whitespace-nowrap text-sm font-medium mr-2 rounded-full transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Loan Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{activeLoan.title} Information</h2>
              <p className="text-gray-700 text-lg mb-8">{activeLoan.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {activeLoan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {activeLoan.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Process */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Consultation</h3>
                    <p className="text-gray-700">Schedule a free consultation with one of our loan specialists to discuss your needs and explore your options.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submission</h3>
                    <p className="text-gray-700">Complete your application online or in person with the help of our specialists, providing all necessary documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Review and Approval</h3>
                    <p className="text-gray-700">Our team will review your application, verify your information, and provide you with a decision, typically within 1-3 business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Closing and Funding</h3>
                    <p className="text-gray-700">After approval, we'll finalize the loan terms, complete any necessary paperwork, and disburse the funds according to your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-blue-100 text-lg mb-8">Our team is ready to help you navigate the loan application process and secure the financing you need.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium text-lg transition-colors">
                  Contact Us
                </Link>
                <button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-full font-medium text-lg transition-colors">
                  Apply Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component 
function LoadingLoanPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-700">Loading loan information...</p>
      </div>
    </div>
  );
}

// Main component that wraps with Suspense
export default function LoansPage() {
  return (
    <Suspense fallback={<LoadingLoanPage />}>
      <LoansContent />
    </Suspense>
  );
} 