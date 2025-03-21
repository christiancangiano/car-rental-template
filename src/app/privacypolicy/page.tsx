"use client";

import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <div className=" h-10 bg-gray-800"/>
      <section className="bg-gray-800 px-6 py-12 md:py-16 w-full flex flex-col items-center">
        <div className="max-w-5xl text-white space-y-6 text-lg">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Your Privacy Matters</h2>
          <p>At Noname Exotics, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or rent a vehicle from us.</p>

          <h3 className="text-2xl font-semibold mt-6">1. Information We Collect</h3>
          <p>We collect the following types of personal information:</p>
          <ul className="list-disc list-inside">
            <li>Contact Information: Name, phone number, email address.</li>
            <li>Payment Details: Credit card or billing information (securely processed).</li>
            <li>Driver Credentials: Driver’s license, insurance information.</li>
            <li>Rental History: Previous and ongoing rentals.</li>
            <li>Website Usage: IP address, browser type, pages visited (via cookies).</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h3>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc list-inside">
            <li>To process bookings and payments securely.</li>
            <li>To verify your identity and eligibility for rentals.</li>
            <li>To send rental confirmations and important notifications.</li>
            <li>To improve website performance and customer experience.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">3. How We Protect Your Data</h3>
          <p>We implement security measures to protect your personal information, including:</p>
          <ul className="list-disc list-inside">
            <li>Encryption: All sensitive data is encrypted during transmission.</li>
            <li>Secure Payment Processing: We do not store full credit card details.</li>
            <li>Limited Access: Only authorized employees have access to your data.</li>
            <li>Regular Security Audits: Our systems are tested for vulnerabilities.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">4. Cookies & Tracking</h3>
          <p>Our website uses cookies to enhance user experience. By using our website, you consent to our use of cookies for:</p>
          <ul className="list-disc list-inside">
            <li>Analytics: Understanding visitor behavior to improve services.</li>
            <li>Personalization: Remembering your preferences for future visits.</li>
            <li>Marketing: Serving relevant ads based on browsing activity.</li>
          </ul>
          <p>You can disable cookies in your browser settings, but some site features may not function properly.</p>

          <h3 className="text-2xl font-semibold mt-6">5. Third-Party Sharing</h3>
          <p>We do not sell your personal information. However, we may share your data with trusted third parties:</p>
          <ul className="list-disc list-inside">
            <li>Payment processors for secure transactions.</li>
            <li>Law enforcement if required by court order.</li>
            <li>Marketing partners (if you opt-in for promotions).</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">6. Your Rights & Choices</h3>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside">
            <li>Access your personal data.</li>
            <li>Request corrections to inaccurate information.</li>
            <li>Opt out of marketing emails at any time.</li>
            <li>Request data deletion, subject to legal obligations.</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:privacy@nonameexotics.com" className="text-blue-500 hover:underline">privacy@nonameexotics.com</a>.</p>

          <h3 className="text-2xl font-semibold mt-6">7. Data Retention Policy</h3>
          <p>We retain personal information only as long as necessary:</p>
          <ul className="list-disc list-inside">
            <li>Rental records: Kept for 6 years for legal purposes.</li>
            <li>Payment data: Stored temporarily for transaction verification.</li>
            <li>Marketing data: Stored until you opt out.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">8. Children's Privacy</h3>
          <p>Our services are not intended for individuals under 18 years old. We do not knowingly collect data from minors.</p>

          <h3 className="text-2xl font-semibold mt-6">9. Policy Updates</h3>
          <p>We may update this Privacy Policy periodically. The latest version will always be available on our website.</p>

          <h3 className="text-2xl font-semibold mt-6">10. Contact Us</h3>
          <p>If you have any questions regarding this Privacy Policy, reach out to us at:</p>
          <p>Email: <a href="mailto:privacy@nonameexotics.com" className="text-blue-500 hover:underline">privacy@nonameexotics.com</a></p>
          <p>Phone: (212) 555-7890</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;