
import logo from "../assets/edubuklogo.png";
import social2 from '../assets/Social/social2.png'
import social3 from '../assets/Social/social3.png'
import social4 from '../assets/Social/social4.png'
import social5 from '../assets/Social/social5.png'
import social6 from '../assets/Social/social6.png'
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { FaPhone, FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-white sm:px-4 gap-4 border-b-8 border-[#006666]" data-aos="fade-up">
    
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 border-b-2 border-t-2 border-gray-300 pb-3 " >
        <img src={logo} alt="logo" className="md:w-[200px] md:h-[200px] w-[152px] h-[152px]"></img>
        <div className="flex flex-col justify-center gap-4 sm:pl-16">
            <div className="font-semibold text-xl text-black uppercase">Legals:</div>
            <Link to="/terms-and-conditions" className="flex justify-start gap-2 items-center text-black"><FaRegFileAlt />Terms & Conditions</Link>
            <Link to="/cancellation-policy" className="flex justify-start gap-2 items-center text-black"><FaRegFileAlt />Cancellation Policy</Link> 
        </div>
        <div className="flex flex-col justify-center gap-4 sm:pl-16">
              <Link to="/refund-policy" className="flex justify-start gap-2 items-center text-black"><FaRegFileAlt />Refund Policy</Link>
            <Link to="/privacy-policy" className="flex justify-start gap-2 items-center text-black"><FaRegFileAlt />Privacy Policy</Link>
            <Link to="/contact-us" className="flex justify-start gap-2 items-center text-black"><FaPhone />Contact Us</Link>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:pl-16 ml-10">
            <div className="font-semibold text-xl text-black uppercase">Contact Us:</div>
            <div className="flex justify-start gap-2 items-center text-black"><MdEmail />Email: support@edubukeseal.org</div>
            <div className="flex justify-start gap-2 items-center text-black"><MdPhone />Phone: +91 9250411261</div>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:pl-16">
            <div className="font-semibold text-xl text-black uppercase">Our Offices:</div>
            <div className="flex justify-start gap-2 items-center text-black"><MdLocationPin /> Hyderabad, India</div>
            <div className="flex justify-start gap-2 items-center text-black"><MdLocationPin /> Dubai, UAE</div>
        </div>
      </div>
   
      <div className="flex justify-center md:justify-between items-center align-middle pb-6 flex-wrap-reverse">
        <p className="text-[#000000] w-full border-t-2 border-gray-300 sm:w-auto text-center sm:border-none pt-3">© 2025 Edubuk | All Rights Reserved</p>
        <div className="flex justify-center items-center gap-2 w-full sm:w-auto pb-3 sm:pb-0">
            <p className="text-[#000000] font-semibold">Follow us on:</p>
            <a href="https://www.facebook.com/edubuk.trst/" target="_blank" rel="no-refferer"><img src={social2} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.instagram.com/edubuk_/" target="_blank" rel="no-refferer"><img src={social3} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.linkedin.com/company/edubuk-ai-web3/" target="_blank" rel="no-refferer"><img src={social4} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://x.com/edubuktrust" target="_blank" rel="no-refferer"><img src={social5} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos" target="_blank" rel="no-refferer"><img src={social6} alt="social logo" className="w-5 h-5" ></img></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
