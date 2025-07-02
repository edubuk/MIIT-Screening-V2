import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <Link to="/"><FaArrowLeft className="text-black w-6 h-6 cursor-pointer mb-4"/></Link>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006666] mb-4">Cancellation Policy</p>
      
      <p className="text-gray-600 mb-4">
        At Edubuk, we understand that circumstances may arise where users need to 
        cancel their enrollment or subscription. While we strive to accommodate our 
        users to the best of our ability, please be aware of the following cancellation terms:
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Cancellation Request</h2>
      <p className="text-gray-600">
        Users can request cancellation of their enrollment or subscription by contacting 
        our customer support team through the designated channels provided on our website 
        or within the user dashboard.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Cancellation Period</h2>
      <p className="text-gray-600">
        A cancellation period of 7 days is applicable from the date of enrollment or 
        subscription purchase. Requests for cancellation within this period will be 
        considered for a refund as per our Refund Policy.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">No Refund After Cancellation Period</h2>
      <p className="text-gray-600">
        If a cancellation request is made after the 7-day cancellation period has 
        elapsed, no refunds will be issued. However, users will retain access to 
        the services for the remainder of the subscription period.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Service Termination</h2>
      <p className="text-gray-600">
        Upon cancellation, access to our services will be terminated at the end of the 
        current subscription period.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Non-Transferability</h2>
      <p className="text-gray-600">
        Enrollments or subscriptions are non-transferable and cannot be transferred 
        to another individual.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-4">Policy Revisions</h2>
      <p className="text-gray-600">
        Edubuk reserves the right to modify or update this cancellation policy at any 
        time without prior notice.
      </p>
    </div>
  );
};

export default CancellationPolicy;
