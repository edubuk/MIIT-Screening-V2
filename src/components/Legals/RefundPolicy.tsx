import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
    <Link to="/"><FaArrowLeft className="text-black w-6 h-6 mb-4 cursor-pointer"/></Link>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006666] mb-4">Refund Policy</p>

      <p className="text-gray-600 mb-4">
        Our refund policy outlines the terms and conditions under which refunds
        may be issued for cancellations:
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Refund Eligibility</h2>
      <p className="text-gray-600">
        Refunds are eligible only if a cancellation request is made within the
        7-day cancellation period from the date of enrollment or subscription
        purchase.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Refund Processing</h2>
      <p className="text-gray-600">
        Refunds for eligible cancellations will be processed within 14 business
        days from the date of approval. The refund will be issued using the same
        method of payment used for the original transaction.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">No Refunds After Cancellation Period</h2>
      <p className="text-gray-600">
        Refunds will not be issued for cancellation requests made after the
        7-day cancellation period has elapsed.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Partial Utilization</h2>
      <p className="text-gray-600">
        If a user has partially utilized our services before requesting
        cancellation, no refunds will be issued for the unused portion of the
        service.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Policy Revisions</h2>
      <p className="text-gray-600">
        Edubuk reserves the right to modify or update this refund policy at any
        time without prior notice.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">Terms & Conditions</h2>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Acceptance of Terms</h2>
      <p className="text-gray-600">
        By accessing or using our website, services, or products, users agree to
        abide by these Terms & Conditions.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">User Obligations</h2>
      <p className="text-gray-600">
        Users are responsible for providing accurate information during
        registration and ensuring the confidentiality of their account
        credentials. Users must not share their account access with others.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Intellectual Property</h2>
      <p className="text-gray-600">
        All content provided on the Edubuk website, including but not limited to
        text, graphics, logos, images, videos, and software, is the property of
        Edubuk and protected by intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Limitation of Liability</h2>
      <p className="text-gray-600">
        Edubuk shall not be liable for any direct, indirect, incidental,
        consequential, or punitive damages arising out of the use or inability
        to use our services, even if advised of the possibility of such damages.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Modification of Services</h2>
      <p className="text-gray-600">
        Edubuk reserves the right to modify, suspend, or discontinue any aspect
        of its services at any time without prior notice.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Privacy Policy</h2>
      <p className="text-gray-600">
        Our Privacy Policy outlines how we collect, use, and disclose personal
        information. By using our services, users consent to the collection and
        use of their information as described in the Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Governing Law</h2>
      <p className="text-gray-600">
        These Terms & Conditions shall be governed by and construed in
        accordance with the laws of India, without regard to its conflict of law
        provisions.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Policy Revisions</h2>
      <p className="text-gray-600">
        Edubuk reserves the right to modify or update these Terms & Conditions
        at any time without prior notice.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-6">Company Information</h2>
      <p className="text-gray-600">
        <strong>Company:</strong> Eduprovince Technologies Private Limited (Edubuk)
      </p>
      <p className="text-gray-600">
        <strong>Operating Address:</strong> PHF 4117, Prestige High Fields, ISB Road, Financial District, Hyderabad-500032, Telangana, India
      </p>
      <p className="text-gray-600">
        <strong>Email:</strong>{" "}
        <a href="mailto:support@edubuk.com" className="text-blue-600 hover:underline">
          support@edubuk.com
        </a>
      </p>
    </div>
  );
};

export default RefundPolicy;
