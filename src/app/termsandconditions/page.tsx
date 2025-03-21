"use client";

import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
    <div className="h-10 bg-gray-800"/>
      <section className="bg-gray-800 px-6 py-12 md:py-16 w-full flex flex-col items-center">
        <div className="max-w-5xl text-white space-y-6 text-lg">
          <h2 className="text-4xl font-bold text-white text-center mb-6">Terms and Conditions</h2>

          <p>Welcome to <strong>Noname Exotics</strong>. By renting a vehicle from us, you agree to comply with the following terms and conditions. Please read them carefully before proceeding with your rental.</p>

          <h3 className="text-2xl font-semibold mt-6">1. Rental Eligibility</h3>
          <p>To rent a vehicle from Noname Exotics, you must:</p>
          <ul className="list-disc list-inside">
            <li>Be at least <strong>25 years old</strong> (drivers under 25 may be subject to additional fees).</li>
            <li>Hold a valid, government-issued driver’s license.</li>
            <li>Provide proof of full-coverage insurance that extends to rental vehicles.</li>
            <li>Present a major credit card for the security deposit.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">2. Security Deposit</h3>
          <p>A refundable security deposit is required for all rentals. Deposit amounts vary by vehicle and range from <strong>$1,000 to $10,000</strong>. The deposit will be refunded within <strong>7 business days</strong> after the vehicle is returned in its original condition.</p>

          <h3 className="text-2xl font-semibold mt-6">3. Rental Period & Returns</h3>
          <p>Rentals are charged on a <strong>per-day basis</strong> (24-hour rental period). Late returns will be subject to additional charges as follows:</p>
          <ul className="list-disc list-inside">
            <li><strong>0-1 hour late:</strong> $100 penalty.</li>
            <li><strong>1-3 hours late:</strong> 50% of the daily rental rate.</li>
            <li><strong>3+ hours late:</strong> Full daily rental rate applies.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">4. Mileage Policy</h3>
          <p>Each rental includes a <strong>100-mile daily limit</strong>. Additional mileage is charged at a rate of:</p>
          <ul className="list-disc list-inside">
            <li><strong>$3 per extra mile</strong> for standard luxury cars.</li>
            <li><strong>$5 per extra mile</strong> for high-performance vehicles.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">5. Fuel Policy</h3>
          <p>All vehicles must be returned with the same fuel level as at the time of rental. Failure to do so will result in a refueling charge of <strong>$10 per gallon</strong>.</p>

          <h3 className="text-2xl font-semibold mt-6">6. Insurance Requirements</h3>
          <p>Renters must provide proof of <strong>full-coverage insurance</strong> that extends to rental vehicles. If you do not have sufficient coverage, we offer insurance options at an additional cost.</p>

          <h3 className="text-2xl font-semibold mt-6">7. Vehicle Damage & Liability</h3>
          <p>Renters are fully responsible for any damage, theft, or loss of the vehicle during the rental period. The renter agrees to cover:</p>
          <ul className="list-disc list-inside">
            <li>All repair costs not covered by insurance.</li>
            <li>Loss of rental income if the vehicle is out of service.</li>
            <li>Full vehicle replacement in the event of total loss.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">8. Prohibited Uses</h3>
          <p>The renter agrees <strong>NOT</strong> to:</p>
          <ul className="list-disc list-inside">
            <li>Use the vehicle for illegal activities.</li>
            <li>Engage in street racing or reckless driving.</li>
            <li>Allow unauthorized drivers to operate the vehicle.</li>
            <li>Drive the vehicle outside of the approved rental area.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">9. Cancellations & Refunds</h3>
          <ul className="list-disc list-inside">
            <li><strong>More than 48 hours before rental:</strong> Full refund.</li>
            <li><strong>Less than 48 hours before rental:</strong> 50% refund.</li>
            <li><strong>Same-day cancellations or no-shows:</strong> No refund.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">10. Privacy Policy</h3>
          <p>Your personal information will be collected solely for rental verification purposes and will not be shared with third parties except as required by law.</p>

          <h3 className="text-2xl font-semibold mt-6">11. Dispute Resolution</h3>
          <p>All disputes arising from this agreement will be resolved through <strong>binding arbitration</strong> in the state of New York or California, depending on the rental location.</p>

          <h3 className="text-2xl font-semibold mt-6">12. Governing Law</h3>
          <p>This agreement is governed by the laws of the state where the rental took place.</p>

          <h3 className="text-2xl font-semibold mt-6">13. Acknowledgment</h3>
          <p>By proceeding with the rental, you acknowledge that you have read and agree to the terms and conditions outlined above.</p>
          </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;