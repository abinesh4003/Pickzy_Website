import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-400">Privacy Policy</span>
        </nav>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Effective Date: AUG 2025
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 mb-8">
          <p className="text-lg mb-6">
            At PickZy Interactive, we are committed to safeguarding the privacy and security of the information entrusted to us. 
            This Privacy Policy outlines our practices regarding the collection, use, and protection of your data when you engage 
            with our website, services, or communications.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information to enhance our services and provide a seamless user experience. This may include:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">a. Personal Information</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Contact number</li>
                    <li>Organization details</li>
                    <li>Job title and project requirements</li>
                    <li>Other information voluntarily submitted via our forms or communications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">b. Non-Personal Information</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Browser and device information</li>
                    <li>IP address</li>
                    <li>Geographic location (approximate)</li>
                    <li>Pages visited, time spent, and interaction data</li>
                    <li>Referring links or websites</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">2. Purpose of Data Collection</h2>
              <p>Your information may be used for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To deliver and improve our digital products and services</li>
                <li>To respond to your inquiries, proposals, or support requests</li>
                <li>To tailor our communication and offerings to your preferences</li>
                <li>To send important updates, newsletters, or service-related announcements</li>
                <li>To analyze user behavior and enhance website functionality</li>
                <li>To comply with applicable legal and regulatory obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We respect your privacy and do not sell or rent your personal data. Information may be shared only with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trusted service providers and partners assisting in service delivery, under strict confidentiality agreements</li>
                <li>Legal or regulatory authorities, when required to comply with applicable laws or enforce our rights</li>
                <li>Successors or affiliates in the event of a corporate restructuring, merger, or acquisition</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website utilizes cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Analyze website traffic and user behavior</li>
                <li>Customize user experience and preferences</li>
                <li>Improve content, performance, and functionality</li>
              </ul>
              <p>
                You may manage cookie preferences through your browser settings. Please note that disabling cookies may affect certain site features.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures both technical and organizational to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                Despite our efforts, no system is fully immune to risks. We recommend taking appropriate steps on your end to secure your personal devices and data.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Access or update your personal data</li>
                <li>Request deletion of your data, subject to legal or contractual obligations</li>
                <li>Object to or restrict specific data uses</li>
                <li>Withdraw consent, where applicable</li>
                <li>Lodge a complaint with the relevant data protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline">sales@pickzy.com</a>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">7. Third-Party Services and Links</h2>
              <p>
                Our website may contain links to external platforms or services. We are not responsible for the privacy practices or content of third-party websites. We encourage reviewing their privacy policies prior to providing any personal information.
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
              <p>
                Our services are intended for a professional audience and are not directed toward individuals under the age of 13. We do not knowingly collect information from children. If we become aware of such collection, we will take immediate steps to delete the data.
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h2 className="text-xl font-semibold mb-4">9. Policy Updates</h2>
              <p>
                This Privacy Policy may be periodically updated to reflect changes in legal requirements, technology, or our business practices. The latest version will always be available on our website, with the effective date clearly noted.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">10. Contact Information</h2>
              <p className="mb-2">
                For questions, concerns, or requests related to this Privacy Policy, please reach out to us at:
              </p>
              <address className="not-italic">
                <p>PickZy Interactive</p>
                <p>Email: <a href="mailto:sales@pickzy.com" className="text-blue-600 hover:underline">sales@pickzy.com</a></p>
                <p>Website: <a href="https://www.pickzy.com" className="text-blue-600 hover:underline">www.pickzy.com</a></p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}