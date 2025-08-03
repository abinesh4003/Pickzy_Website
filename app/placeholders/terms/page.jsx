import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-400 dark:text-gray-500">Terms of Service</span>
          </nav>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Last Updated: August 2025 | Effective Immediately
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Introduction */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Welcome to PickZy Interactive</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms of Service govern your use of our website and services. By accessing or using our platform, 
                you agree to be bound by these terms. If you disagree with any part, please discontinue use immediately.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
              {/* Section 1 */}
              <section className="pt-6 first:pt-0">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        By accessing or using PickZy Interactive's website, services, or applications (collectively, the "Services"), 
                        you agree to be bound by these Terms of Service ("Terms"). These Terms affect your legal rights and obligations.
                      </p>
                      <p className="mt-4">
                        If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization 
                        and representing that you have authority to bind that organization to these Terms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property Rights</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        All content on our platform including but not limited to text, graphics, logos, button icons, images, 
                        audio clips, digital downloads, data compilations, and software is the property of PickZy Interactive 
                        or its content suppliers and protected by international copyright laws.
                      </p>
                      <ul className="mt-4 space-y-2 pl-5 list-disc">
                        <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
                            create derivative works from, transfer, or sell any information obtained from our Services</li>
                        <li>All trademarks not owned by PickZy Interactive that appear on our Services are the property 
                            of their respective owners</li>
                        <li>Unauthorized use may violate copyright, trademark, and other laws</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Conduct & Restrictions</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>You agree not to engage in any of the following prohibited activities:</p>
                      <ul className="mt-3 space-y-2 pl-5 list-disc">
                        <li>Copying, distributing, or disclosing any part of the Services in any medium</li>
                        <li>Using any automated system to access the Services in a manner that sends more request messages than a human could reasonably produce</li>
                        <li>Transmitting spam, chain letters, or other unsolicited email</li>
                        <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions</li>
                        <li>Taking any action that imposes an unreasonable load on our infrastructure</li>
                        <li>Uploading invalid data, viruses, worms, or other software agents</li>
                        <li>Collecting or harvesting any personally identifiable information</li>
                        <li>Impersonating another person or otherwise misrepresenting your affiliation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        Your privacy is important to us. Our <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">Privacy Policy</Link> explains how we collect, use, 
                        and protect your personal information. By using our Services, you agree to our collection and use 
                        of data as described in that policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
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
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    6
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We reserve the right to modify these Terms at any time. We will provide notice of substantial changes 
                        through our website or via email. Your continued use of our Services after such changes constitutes 
                        your acceptance of the new Terms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    7
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Termination</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        We may terminate or suspend your access to our Services immediately, without prior notice or liability, 
                        for any reason whatsoever, including without limitation if you breach these Terms.
                      </p>
                      <p className="mt-4">
                        Upon termination, your right to use the Services will immediately cease. All provisions of these Terms 
                        which by their nature should survive termination shall survive termination.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    8
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        These Terms shall be governed by and construed in accordance with the laws of India, without regard 
                        to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the 
                        courts located in Chennai, Tamil Nadu.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section className="pt-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    9
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p>
                        For any questions about these Terms of Service, please contact us at:
                      </p>
                      <div className="mt-4 space-y-2">
                        <p className="flex items-start">
                          <span className="font-medium mr-2">Email:</span>
                          <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400">
                            sales@pickzy.com
                          </a>
                        </p>
                        <p className="flex items-start">
                          <span className="font-medium mr-2">Address:</span>
                          <span>
                            JVL Plaza, 6th Floor,<br />
                            Anna Salai, Teynampet,<br />
                            Chennai 600018, India
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span className="font-medium mr-2">Phone:</span>
                          <span>+91 44 4501 4466</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Final Notice */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Important Notice</h3>
              <p className="text-gray-700 dark:text-gray-300">
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms of Service. If you do not agree, you may not access or use our Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}