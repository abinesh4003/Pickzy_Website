import { ChevronRight, Cookie, Shield, Settings, Info } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">Cookies Policy</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Cookies Policy
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

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 md:p-8">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 rounded-lg p-3 mr-4 flex-shrink-0">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Understanding Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  This Cookies Policy explains how PickZy Interactive uses cookies and similar technologies when you visit our website. 
                  By continuing to browse our site, you consent to our use of cookies in accordance with this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="p-6 md:p-8 space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
            {/* Section 1 */}
            <section className="pt-8 first:pt-0">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                      Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. 
                      They help websites remember information about your visit, which can make it easier to visit the site again and make 
                      the site more useful to you.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="pt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>We use cookies for several purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 dark:marker:text-blue-400 mt-2">
                      <li>
                        <strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., authentication, security)
                      </li>
                      <li>
                        <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
                      </li>
                      <li>
                        <strong>Functionality Cookies:</strong> Remember your preferences and settings
                      </li>
                      <li>
                        <strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant ads (we use minimal advertising cookies)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="pt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Cookie Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Purpose
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Session Cookies
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            Maintain user session and authentication
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            Session
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Analytics Cookies
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            Understand website usage and performance
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            1-2 years
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            Preference Cookies
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            Remember your settings and preferences
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            1 year
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="pt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. Managing Cookies</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>You can control and/or delete cookies as you wish. Most web browsers allow some control of cookies through browser settings.</p>
                    <p className="mt-4">To learn more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">www.allaboutcookies.org</a>.</p>
                    <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Browser-Specific Instructions:</h3>
                      <ul className="list-disc pl-6 space-y-1 marker:text-blue-500 dark:marker:text-blue-400">
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Apple Safari</a></li>
                        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Microsoft Edge</a></li>
                      </ul>
                    </div>
                    <p className="mt-4">Please note that if you disable cookies, some features of our website may not function properly.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="pt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. Changes to This Policy</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                      We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our data use practices. 
                      When we make significant changes, we will notify you through appropriate channels (e.g., website notice, email).
                    </p>
                    <p className="mt-4">
                      We recommend reviewing this policy periodically to stay informed about how we use cookies.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="pt-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                    <p>
                      If you have any questions about our use of cookies or this policy, please contact us:
                    </p>
                    <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <address className="not-italic space-y-2">
                        <p className="flex items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Email:</span>
                          <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400">
                            sales@pickzy.com
                          </a>
                        </p>
                        <p className="flex items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-3 w-20 flex-shrink-0">Address:</span>
                          <span>
                            JVL Plaza, 6th Floor,<br />
                            Anna Salai, Teynampet,<br />
                            Chennai 600018, India
                          </span>
                        </p>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Final Notice */}
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
                  By continuing to use our website without changing your settings, you consent to our use of cookies as described in this policy. 
                  If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our site.
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