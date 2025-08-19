import { ChevronRight, Cookie, Shield, Settings, Info, Mail, MapPin, AlertCircle, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 md:mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors dark:hover:text-blue-400 flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">Cookies Policy</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cookies Policy
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Last Updated: August 2025 | Effective Immediately
              </p>
            </div>
            <Link 
              href="/placeholders/privacy" 
              className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors mt-2 md:mt-0"
            >
              View Privacy Policy
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col xs:flex-row items-start">
              <div className="bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 rounded-lg p-2 sm:p-3 mr-0 xs:mr-3 mb-3 xs:mb-0 flex-shrink-0 self-start">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2 sm:mb-3">Understanding Cookies</h2>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  This Cookies Policy explains how PickZy Interactive uses cookies and similar technologies when you visit our website. 
                  By continuing to browse our site, you consent to our use of cookies in accordance with this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
            {/* Section 1 */}
            <section className="pt-6 md:pt-8 first:pt-0">
              <div className="flex flex-col xs:flex-row items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
                  <Info className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">1. What Are Cookies?</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300">
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
            <section className="pt-6 md:pt-8">
              <div className="flex flex-col xs:flex-row items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
                  <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">2. How We Use Cookies</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>We use cookies for several purposes:</p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 marker:text-blue-500 dark:marker:text-blue-400 mt-2">
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

        {/* Section 3 - Table Only (Responsive) */}
<section className="pt-6 md:pt-8">
  <div className="flex flex-col xs:flex-row items-start">
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
      <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
    </div>
    <div className="flex-1 w-full">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">3. Types of Cookies We Use</h2>
      
      <div className="overflow-x-auto -mx-2 sm:-mx-0">
        <div className="min-w-[320px]">
          <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 text-xs sm:text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap">
                  Cookie Type
                </th>
                <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Purpose
                </th>
                <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-2 py-2 sm:px-4 sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Session Cookies
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300">
                  Maintain user session and authentication
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  Session
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 sm:px-4 sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Analytics Cookies
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300">
                  Understand website usage and performance
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  1-2 years
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 sm:px-4 sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Preference Cookies
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300">
                  Remember your settings and preferences
                </td>
                <td className="px-2 py-2 sm:px-4 sm:py-4 text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  1 year
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
            {/* Section 4 */}
            <section className="pt-6 md:pt-8">
              <div className="flex flex-col xs:flex-row items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">4. Managing Cookies</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>You can control and/or delete cookies as you wish. Most web browsers allow some control of cookies through browser settings.</p>
                    <p className="mt-3 sm:mt-4">To learn more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">www.allaboutcookies.org</a>.</p>
                    <div className="mt-4 sm:mt-6 bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-lg">
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Browser-Specific Instructions:</h3>
                      <ul className="list-disc pl-5 space-y-1 marker:text-blue-500 dark:marker:text-blue-400">
                        <li className="text-xs sm:text-sm"><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Google Chrome</a></li>
                        <li className="text-xs sm:text-sm"><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Mozilla Firefox</a></li>
                        <li className="text-xs sm:text-sm"><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Apple Safari</a></li>
                        <li className="text-xs sm:text-sm"><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Microsoft Edge</a></li>
                      </ul>
                    </div>
                    <p className="mt-3 sm:mt-4">Please note that if you disable cookies, some features of our website may not function properly.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="pt-6 md:pt-8">
              <div className="flex flex-col xs:flex-row items-start">
                <div className="bg-blue-100 dark:blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">5. Changes to This Policy</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our data use practices. 
                      When we make significant changes, we will notify you through appropriate channels (e.g., website notice, email).
                    </p>
                    <p className="mt-3 sm:mt-4">
                      We recommend reviewing this policy periodically to stay informed about how we use cookies.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="pt-6 md:pt-8">
              <div className="flex flex-col xs:flex-row items-start">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mr-0 xs:mr-3 mb-2 xs:mb-0 mt-0 xs:mt-1 flex-shrink-0 self-start">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">6. Contact Us</h2>
                  <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <p>
                      If you have any questions about our use of cookies or this policy, please contact us:
                    </p>
                    <div className="mt-3 sm:mt-4 bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-lg">
                      <address className="not-italic space-y-1 sm:space-y-2">
                        <p className="flex flex-col xs:flex-row items-start xs:items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-0 xs:mr-3 w-20 flex-shrink-0 mb-1 xs:mb-0">Email:</span>
                          <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline dark:text-blue-400 text-sm sm:text-base">
                            sales@pickzy.com
                          </a>
                        </p>
                        <p className="flex flex-col xs:flex-row items-start">
                          <span className="font-medium text-gray-700 dark:text-gray-300 mr-0 xs:mr-3 w-20 flex-shrink-0 mb-1 xs:mb-0">Address:</span>
                          <span className="text-sm sm:text-base">
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
          <div className="mt-6 md:mt-8 p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col xs:flex-row items-start">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300 rounded-lg p-2 sm:p-3 mr-0 xs:mr-3 mb-3 xs:mb-0 flex-shrink-0 self-start">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-lg font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">Important Notice</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  By continuing to use our website without changing your settings, you consent to our use of cookies as described in this policy. 
                  If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our site.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <Link 
                    href="/contact-us" 
                    className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/" 
                    className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 dark:border-gray-600 text-xs sm:text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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