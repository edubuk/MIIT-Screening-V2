import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 bg-white shadow-lg rounded-lg p-8">
            <Link to="/"><FaArrowLeft className="text-black w-6 h-6 mb-4 cursor-pointer"/></Link>
      <p className="text-2xl sm:text-3xl md:text-4xl text-[#006666] font-bold mb-6">Privacy Policy – Edubuk CETA Olympiad</p>

      <p className="mb-4">
        At Edubuk, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect,
        use, store, and protect your personal information when you use our website and participate in the
        AI & Emerging Technologies Olympiad.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>We collect personal details such as name, email address, phone number, school name, grade/class, and parent or guardian contact information during the registration process.</li>
        <li>We may collect academic details including student interests, Olympiad answers, and performance scores.</li>
        <li>We automatically collect certain technical data such as IP address, device type, browser information, pages visited, time spent on the site, and referral sources using cookies and analytics tools.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Information</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>To register and manage your participation in the Olympiad.</li>
        <li>To deliver relevant learning content and updates.</li>
        <li>To evaluate Olympiad performance and issue certificates, prizes, or recognition.</li>
        <li>To send event-related communications, results, and reminders via email, SMS, or phone calls.</li>
        <li>To improve the website experience and personalize user content.</li>
        <li>To reach out to parents or guardians for consent or information verification.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies and Tracking</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>We use cookies to enhance user experience, remember user preferences, and monitor website usage.</li>
        <li>We may use third-party tools like Google Analytics to understand website traffic and user interaction.</li>
        <li>Users can control cookie preferences through their browser settings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>We implement industry-standard security measures including SSL encryption to protect your personal data.</li>
        <li>Data is stored on secure servers with restricted access to authorized personnel only.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Sharing and Disclosure</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>We do not sell or rent your personal information to third parties.</li>
        <li>Your information may be shared with:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Logistics partners for certificate or prize distribution.</li>
            <li>Collaborating schools or educational institutions.</li>
            <li>Regulatory or legal authorities when required by law.</li>
          </ul>
        </li>
        <li>All third parties are under strict confidentiality obligations.</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
