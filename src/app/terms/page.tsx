"use client"
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Add Header component */}
      <Header />
      
      {/* Page Content */}
      <main className="flex-grow bg-white pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[var(--font-playfair)]">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: July 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the AYP Financial Solutions website (the "Service") operated by AYP Financial Solutions ("us", "we", or "our").
              </p>
              
              <p className="text-gray-700 mb-6">
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              
              <p className="text-gray-700 mb-6">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of the Service</h2>
              
              <p className="text-gray-700 mb-6">
                AYP Financial Solutions provides a platform for users to explore financial services including loans, insurance, and financial planning tools. The information provided through our Service is for general informational purposes only and is not intended to be taken as financial advice.
              </p>
              
              <p className="text-gray-700 mb-6">
                You are responsible for safeguarding the security of your personal information when using our Service. You agree not to disclose your personal or financial information to unauthorized parties.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Financial Information</h2>
              
              <p className="text-gray-700 mb-6">
                The financial information displayed on our Service, including loan rates, insurance premiums, and other financial data, is subject to change without notice. We strive to provide accurate and up-to-date information, but we make no guarantees regarding the accuracy, completeness, or reliability of any information on our Service.
              </p>
              
              <p className="text-gray-700 mb-6">
                Any financial decisions you make based on information provided by our Service are made at your own risk. We recommend consulting with a qualified financial advisor before making significant financial decisions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Accounts</h2>
              
              <p className="text-gray-700 mb-6">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              
              <p className="text-gray-700 mb-6">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </p>
              
              <p className="text-gray-700 mb-6">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
              
              <p className="text-gray-700 mb-6">
                The Service and its original content, features, and functionality are and will remain the exclusive property of AYP Financial Solutions and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AYP Financial Solutions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Links To Other Web Sites</h2>
              
              <p className="text-gray-700 mb-6">
                Our Service may contain links to third-party websites or services that are not owned or controlled by AYP Financial Solutions.
              </p>
              
              <p className="text-gray-700 mb-6">
                AYP Financial Solutions has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that AYP Financial Solutions shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              
              <p className="text-gray-700 mb-6">
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Termination</h2>
              
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <p className="text-gray-700 mb-6">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              
              <p className="text-gray-700 mb-6">
                In no event shall AYP Financial Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimer</h2>
              
              <p className="text-gray-700 mb-6">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
              
              <p className="text-gray-700 mb-6">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes</h2>
              
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <p className="text-gray-700 mb-6">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-8">
                <li>By email: legal@aypfinancialsolutions.com</li>
                <li>By phone: +1 (555) 123-4567</li>
                <li>By mail: 123 Financial Way, Los Angeles, CA 90001, United States</li>
              </ul>
              
              <p className="text-gray-700 mt-10">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline">
                  View our Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 