import { ChevronRight, Shield, Lock, Cookie, User, Mail, Globe, Settings, EyeOff, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-12 md:py-16">
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
            <span className="text-gray-600 dark:text-gray-300">Privacy Policy</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Effective Date: August 2025 | Last Updated: August 2025
              </p>
            </div>
            <Link 
              href="/placeholders/terms" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View Terms of Service
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
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Your Privacy Matters</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  At PickZy Interactive, we are committed to safeguarding the privacy and security of the information entrusted to us. 
                  This Privacy Policy outlines our practices regarding the collection, use, and protection of your data when you engage 
                  with our website, services, or communications.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections with Improved Layout */}
          <div className="p-6 md:p-8 space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                icon: <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "1. Information We Collect",
                content: (
                  <>
                    <p className="mb-4">
                      We collect information to enhance our services and provide a seamless user experience. This may include:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <h3 className="font-medium flex items-center">
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                            a
                          </span>
                          Personal Information
                        </h3>
                        <ul className="list-disc pl-8 mt-2 space-y-1 marker:text-blue-500 dark:marker:text-blue-400">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Contact number</li>
                          <li>Organization details</li>
                          <li>Job title and project requirements</li>
                          <li>Other information voluntarily submitted via our forms or communications</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                        <h3 className="font-medium flex items-center">
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                            b
                          </span>
                          Non-Personal Information
                        </h3>
                        <ul className="list-disc pl-8 mt-2 space-y-1 marker:text-blue-500 dark:marker:text-blue-400">
                          <li>Browser and device information</li>
                          <li>IP address</li>
                          <li>Geographic location (approximate)</li>
                          <li>Pages visited, time spent, and interaction data</li>
                          <li>Referring links or websites</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )
              },
              {
                icon: <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "2. Purpose of Data Collection",
                content: (
                  <>
                    <p>Your information may be used for the following purposes:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-blue-500 dark:marker:text-blue-400">
                      <li>To deliver and improve our digital products and services</li>
                      <li>To respond to your inquiries, proposals, or support requests</li>
                      <li>To tailor our communication and offerings to your preferences</li>
                      <li>To send important updates, newsletters, or service-related announcements</li>
                      <li>To analyze user behavior and enhance website functionality</li>
                      <li>To comply with applicable legal and regulatory obligations</li>
                    </ul>
                  </>
                )
              },
              {
                icon: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "3. Data Sharing and Disclosure",
                content: (
                  <>
                    <p className="mb-4">
                      We respect your privacy and do not sell or rent your personal data. Information may be shared only with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 dark:marker:text-blue-400">
                      <li>Trusted service providers and partners assisting in service delivery, under strict confidentiality agreements</li>
                      <li>Legal or regulatory authorities, when required to comply with applicable laws or enforce our rights</li>
                      <li>Successors or affiliates in the event of a corporate restructuring, merger, or acquisition</li>
                    </ul>
                  </>
                )
              },
              {
                icon: <Cookie className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "4. Cookies and Tracking Technologies",
                content: (
                  <>
                    <p className="mb-4">
                      Our website utilizes cookies and similar technologies to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 dark:marker:text-blue-400 mb-4">
                      <li>Analyze website traffic and user behavior</li>
                      <li>Customize user experience and preferences</li>
                      <li>Improve content, performance, and functionality</li>
                    </ul>
                    <p>
                      You may manage cookie preferences through your browser settings. Please note that disabling cookies may affect certain site features.
                    </p>
                  </>
                )
              },
              {
                icon: <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "5. Data Security",
                content: (
                  <>
                    <p className="mb-4">
                      We implement industry-standard security measures both technical and organizational to protect your information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <p>
                      Despite our efforts, no system is fully immune to risks. We recommend taking appropriate steps on your end to secure your personal devices and data.
                    </p>
                  </>
                )
              },
              {
                icon: <EyeOff className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "6. Your Rights and Choices",
                content: (
                  <>
                    <p className="mb-4">
                      Depending on your jurisdiction, you may have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 dark:marker:text-blue-400 mb-4">
                      <li>Access or update your personal data</li>
                      <li>Request deletion of your data, subject to legal or contractual obligations</li>
                      <li>Object to or restrict specific data uses</li>
                      <li>Withdraw consent, where applicable</li>
                      <li>Lodge a complaint with the relevant data protection authority</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us at <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400 font-medium">sales@pickzy.com</a>.
                    </p>
                  </>
                )
              },
              {
                icon: <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "7. Third-Party Services and Links",
                content: (
                  <p>
                    Our website may contain links to external platforms or services. We are not responsible for the privacy practices or content of third-party websites. We encourage reviewing their privacy policies prior to providing any personal information.
                  </p>
                )
              },
              {
                icon: <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "8. Children's Privacy",
                content: (
                  <p>
                    Our services are intended for a professional audience and are not directed toward individuals under the age of 13. We do not knowingly collect information from children. If we become aware of such collection, we will take immediate steps to delete the data.
                  </p>
                )
              },
              {
                icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "9. Policy Updates",
                content: (
                  <p>
                    This Privacy Policy may be periodically updated to reflect changes in legal requirements, technology, or our business practices. The latest version will always be available on our website, with the effective date clearly noted.
                  </p>
                )
              },
              {
                icon: <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                title: "10. Contact Information",
                content: (
                  <>
                    <p className="mb-4">
                      For questions, concerns, or requests related to this Privacy Policy, please reach out to us at:
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <address className="not-italic space-y-2">
                        <p className="flex items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Company:</span>
                          <span>PickZy Interactive</span>
                        </p>
                        <p className="flex items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Email:</span>
                          <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400">
                            sales@pickzy.com
                          </a>
                        </p>
                        <p className="flex items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Website:</span>
                          <a href="https://www.pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400">
                            www.pickzy.com
                          </a>
                        </p>
                      </address>
                    </div>
                  </>
                )
              }
            ].map((section, index) => (
              <section key={index} className="pt-8 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 sm:mt-0 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="sm:flex-1 sm:pl-4">
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
                  By using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy. 
                  If you do not agree with any part of this policy, please discontinue use of our services.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link 
                    href="/contact-us" 
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