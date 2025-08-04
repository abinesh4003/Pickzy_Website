import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Enhanced Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">Terms of Service</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Terms of Service
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Last Updated: August 2025 | Effective Immediately
              </p>
            </div>
            <Link 
              href="/placeholders/privacy" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View Privacy Policy
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Main Content with Improved Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Introduction with Gradient */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 md:p-8">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 rounded-lg p-3 mr-4 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Welcome to PickZy Interactive</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These Terms of Service govern your use of our website and services. By accessing or using our platform, 
                  you agree to be bound by these terms. If you disagree with any part, please discontinue use immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections with Improved Layout */}
          <div className="p-6 md:p-8 space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                title: "Acceptance of Terms",
                content: (
                  <>
                    <p>
                      By accessing or using PickZy Interactive's website, services, or applications (collectively, the "Services"), 
                      you agree to be bound by these Terms of Service ("Terms"). These Terms affect your legal rights and obligations.
                    </p>
                    <p className="mt-4">
                      If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization 
                      and representing that you have authority to bind that organization to these Terms.
                    </p>
                  </>
                )
              },
              {
                title: "Intellectual Property Rights",
                content: (
                  <>
                    <p>
                      All content on our platform including but not limited to text, graphics, logos, button icons, images, 
                      audio clips, digital downloads, data compilations, and software is the property of PickZy Interactive 
                      or its content suppliers and protected by international copyright laws.
                    </p>
                    <ul className="mt-4 space-y-3 pl-5 list-disc marker:text-blue-500 dark:marker:text-blue-400">
                      <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
                          create derivative works from, transfer, or sell any information obtained from our Services</li>
                      <li>All trademarks not owned by PickZy Interactive that appear on our Services are the property 
                          of their respective owners</li>
                      <li>Unauthorized use may violate copyright, trademark, and other laws</li>
                    </ul>
                  </>
                )
              },
              {
                title: "User Conduct & Restrictions",
                content: (
                  <>
                    <p>You agree not to engage in any of the following prohibited activities:</p>
                    <ul className="mt-3 space-y-3 pl-5 list-disc marker:text-blue-500 dark:marker:text-blue-400">
                      <li>Copying, distributing, or disclosing any part of the Services in any medium</li>
                      <li>Using any automated system to access the Services in a manner that sends more request messages than a human could reasonably produce</li>
                      <li>Transmitting spam, chain letters, or other unsolicited email</li>
                      <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions</li>
                      <li>Taking any action that imposes an unreasonable load on our infrastructure</li>
                      <li>Uploading invalid data, viruses, worms, or other software agents</li>
                      <li>Collecting or harvesting any personally identifiable information</li>
                      <li>Impersonating another person or otherwise misrepresenting your affiliation</li>
                    </ul>
                  </>
                )
              },
              {
                title: "Privacy Policy",
                content: (
                  <p>
                    Your privacy is important to us. Our <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">Privacy Policy</Link> explains how we collect, use, 
                    and protect your personal information. By using our Services, you agree to our collection and use 
                    of data as described in that policy.
                  </p>
                )
              },
              {
                title: "Limitation of Liability",
                content: (
                  <>
                    <p>
                      To the maximum extent permitted by law, PickZy Interactive shall not be liable for any indirect, 
                      incidental, special, consequential or punitive damages, or any loss of profits or revenues, 
                      whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                    </p>
                    <p className="mt-4">
                      Our total liability for any claims under these terms, including for any implied warranties, 
                      is limited to the amount you paid us to use the Services (or, if we choose, to supplying you 
                      the Services again).
                    </p>
                  </>
                )
              },
              {
                title: "Changes to Terms",
                content: (
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of substantial changes 
                    through our website or via email. Your continued use of our Services after such changes constitutes 
                    your acceptance of the new Terms.
                  </p>
                )
              },
              {
                title: "Termination",
                content: (
                  <>
                    <p>
                      We may terminate or suspend your access to our Services immediately, without prior notice or liability, 
                      for any reason whatsoever, including without limitation if you breach these Terms.
                    </p>
                    <p className="mt-4">
                      Upon termination, your right to use the Services will immediately cease. All provisions of these Terms 
                      which by their nature should survive termination shall survive termination.
                    </p>
                  </>
                )
              },
              {
                title: "Governing Law",
                content: (
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard 
                    to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the 
                    courts located in Chennai, Tamil Nadu.
                  </p>
                )
              },
              {
                title: "Contact Information",
                content: (
                  <>
                    <p>
                      For any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Email:</span>
                        <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400">
                          sales@pickzy.com
                        </a>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Address:</span>
                        <address className="not-italic">
                          JVL Plaza, 6th Floor,<br />
                          Anna Salai, Teynampet,<br />
                          Chennai 600018, India
                        </address>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Phone:</span>
                        <span>+91 44 4501 4466</span>
                      </div>
                    </div>
                  </>
                )
              }
            ].map((section, index) => (
              <section key={index} className="pt-8 first:pt-0">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Final Notice with Improved Visual Hierarchy */}
          <div className="mt-8 p-6 md:p-8 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-start">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 rounded-lg p-3 mr-4 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Important Notice</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  By using our Services, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms of Service. If you do not agree, you may not access or use our Services.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/" 
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}