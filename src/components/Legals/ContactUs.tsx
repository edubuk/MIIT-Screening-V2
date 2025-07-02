import React from "react";
import contactUs from "../../assets/contactUs.avif"; // A
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// djust the path as necessary
const ContactUs: React.FC = () => {
  return (
  <div className="max-w-6xl mx-auto px-4">
    <Link to="/"><FaArrowLeft className="text-black w-6 h-6 ml-4 cursor-pointer"/></Link>
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
    <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
      <img
        src={contactUs}
        alt="Contact Us"
        className="w-full h-auto object-contain"
      />
    </div>

    <div className="md:w-1/2 p-8">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006666] mb-6 border-b pb-2">
        Contact Us
      </p>

      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        Have questions or need support? Reach out to us. Our team is always here
        to help you!
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Company</h2>
          <p className="text-gray-600">
            Eduprovince Technologies Private Limited (Edubuk)
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">Address</h2>
          <p className="text-gray-600">
            PHF 4117, Prestige High Fields, ISB Road,<br />
            Financial District, Hyderabad-500032,<br />
            Telangana, India
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">Email</h2>
          <a
            href="mailto:support@edubuk.com"
            className="text-[#03257e] font-medium hover:underline"
          >
            support@edubuk.com
          </a>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
          <p
            className="text-[#03257e] font-medium hover:underline"
          >
            Phone: +91 9250411261
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactUs;
