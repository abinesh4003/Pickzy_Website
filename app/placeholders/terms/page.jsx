import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-400">Terms of Service</span>
        </nav>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Effective Date: August 2025
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 mb-8">
          <p className="text-lg mb-6">
            Welcome to PickZy Interactive. By accessing or using our website or services, you agree to the following terms. 
            If you do not agree, please do not use our site.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">1. Use of Services</h2>
              <p>
                You may use our website and services for lawful purposes only. Any misuse, unauthorized access, 
                or attempt to disrupt our platform is strictly prohibited.
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">2. Intellectual Property</h2>
              <p>
                All content on this site including text, designs, code, logos, and graphics is the property of 
                PickZy Interactive. You may not copy, reuse, or distribute our materials without written permission.
              </p>
            </section>

            {/* Section 3 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">3. Privacy</h2>
              <p>
                Your use of our services is also governed by our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. 
                We encourage you to review it for details on how we collect and use data.
              </p>
            </section>

            {/* Section 4 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p>
                We strive to keep our website accurate and secure but do not guarantee error-free or uninterrupted access. 
                PickZy Interactive is not liable for any direct or indirect damages arising from your use of our site or services.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">5. Changes to Terms</h2>
              <p>
                We may update these Terms at any time. Continued use of our services after updates constitutes your 
                acceptance of the new terms.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">6. Contact Us</h2>
              <p>
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline">
                  sales@pickzy.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}