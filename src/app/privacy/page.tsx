"use client"
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* Add Header component */}
      <Header />
      
      {/* Page Content */}
      <main className="flex-grow bg-white pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[var(--font-playfair)]">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: July 1, 2023</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At AYP Financial Solutions, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.
              </p>
              
              <p className="text-gray-700 mb-6">
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              
              <p className="text-gray-700 mb-4">We collect several types of information from and about users of our services, including:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>Contact information (such as name, email address, phone number, and mailing address)</li>
                <li>Financial information (such as income, assets, and credit history) necessary to provide our financial services</li>
                <li>Identification information (such as social security number, driver's license, or other government-issued identification)</li>
                <li>Employment information</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Non-Personal Information</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li>Technical information about your device and internet connection</li>
                <li>Usage details, such as how you navigate our website</li>
                <li>IP address and browser type</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Collect Your Information</h2>
              
              <p className="text-gray-700 mb-4">We collect information through:</p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li>Direct interactions when you provide information by filling in forms on our website or by corresponding with us</li>
                <li>Automated technologies, such as cookies and similar tracking technologies</li>
                <li>Third parties, such as credit bureaus or identity verification services</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              
              <p className="text-gray-700 mb-4">We use your information to:</p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process applications for financial products</li>
                <li>Verify your identity</li>
                <li>Communicate with you about our services, updates, and promotions</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
              
              <p className="text-gray-700 mb-4">We may share your personal information with:</p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li>Service providers who perform services on our behalf</li>
                <li>Financial institutions and lenders to facilitate your loan applications</li>
                <li>Credit bureaus and identity verification services</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                We do not sell your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
              
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure socket layer technology (SSL), and regular security assessments.
              </p>
              
              <p className="text-gray-700 mb-6">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Privacy Rights</h2>
              
              <p className="text-gray-700 mb-4">You have the right to:</p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-6">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information (subject to certain exceptions)</li>
                <li>Object to processing of your personal information</li>
                <li>Request restrictions on processing of your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Opt-out of certain data sharing practices</li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <p className="text-gray-700 mb-6">
                We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until you delete them or they expire) to provide you with a more personalized and responsive service.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
              
              <p className="text-gray-700 mb-6">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our systems.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Our Privacy Policy</h2>
              
              <p className="text-gray-700 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. California Privacy Rights</h2>
              
              <p className="text-gray-700 mb-6">
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). These include the right to know what personal information we collect about you, the right to request deletion of your personal information, and the right to opt-out of the sale of your personal information.
              </p>
              
              <p className="text-gray-700 mb-6">
                To exercise your rights under the CCPA, please contact us using the information provided in the "Contact Us" section.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. International Data Transfers</h2>
              
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              
              <p className="text-gray-700 mb-6">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              
              <ul className="list-disc ml-6 text-gray-700 mb-8">
                <li>By email: privacy@aypfinancialsolutions.com</li>
                <li>By phone: +1 (555) 123-4567</li>
                <li>By mail: AYP Financial Solutions, Attn: Privacy Officer, 123 Financial Way, Los Angeles, CA 90001, United States</li>
              </ul>
              
              <p className="text-gray-700 mt-10">
                <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">
                  View our Terms and Conditions
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