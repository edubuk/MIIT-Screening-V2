import { useEffect, useRef, useState, ChangeEvent } from "react";
import { FaUser,FaLock,FaCity } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import {MdOutlineEmail} from "react-icons/md";
import { TbWorldPin } from "react-icons/tb";
import { colleges } from "../../pages/Colleges";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "./OTPInput";
import toast from "react-hot-toast";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SmallLoader from "../Loader/Loader";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
interface formValue {
  name: string;
  college: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
  password:string;
}

const UserRegistration = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [otp, setOTP] = useState<any>("");
  const [isOtpSent, setIsOtpSend] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formValue>({
    name: "",
    college:query,
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
    password:"",
  });

  const filteredColleges = colleges.filter((college) =>
    college.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (college: string) => {
      setQuery(college);
      setShowDropdown(false);
      setFormData((prev)=>({...prev, college:college}));
      console.log("query",query)
  };

  useEffect(() => {

  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log("form", formData);
  };



const handleSubmit = async(e: React.FormEvent)=>{
      e.preventDefault();
      console.log("form data ",formData)
      try {
        if(!formData.name || !formData.college || !formData.country || !formData.city || !formData.phoneNumber || !formData.email || !formData.password)
        {
          toast.error("All inputs field are required");
        }
        
        setLoading(true);
        const data:any = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/registration`,{
          method:"POST",
          body:JSON.stringify({name:formData.name,email:formData.email.toLowerCase(),college:formData.college,phoneNumber:formData.phoneNumber,city:formData.city, country:formData.country,password:formData.password,otp:otp}),
          headers:{
            "Content-Type": "application/json",
          }
        })

        const res = await data.json();
        console.log("res",res);
        if(res.success)
        {
          localStorage.setItem("email",formData.email);
          setFormData({
            name: "",
            college:"",
            city:"",
            country:"",
            phoneNumber: "",
            email: "",
            password:""
          });
          setLoading(false);
          toast.success(res.message);
          navigate("/login");

        }
        if(!res.success)
        {
          setLoading(false);
          toast.error(res.message);
        }
      } catch (error) {
        setLoading(false);
        console.log("error while user registration",error);
        toast.error("something went wrong !");
      }
    }

      const sendOtpHandler=async(e:any)=>{
        e.preventDefault();
        try {
          if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
              {
                toast.error("Please enter a valid email address");
                return;
              }
          setLoading(true);
            let data:any = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/send-otp`,{
              method:"POST",
              body:JSON.stringify({email:formData.email}),
              headers:{
                "Content-Type": "application/json",
              }
            })
    
            data = await data.json();
            if(data.success)
            {
               setLoading(false);
                toast.success(data.message);
                setIsOtpSend(true);
            }
        } catch (error) {
          setLoading(false);
            toast.error("something went wrong !");
            console.log("error while sending otp",error);
        }
      }


  return (
    <div className="flex flex-col-reverse md:flex-row items-center min-h-screen justify-center px-4 py-8 bg-white">

  {!isOtpSent&&<form
  onSubmit={sendOtpHandler}
    className="p-6 md:p-8 rounded-lg w-full max-w-xl space-y-8"
    id="register"
  >
    <h2 className="text-2xl font-bold text-start text-[#006666]">Sign Up</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6" data-aos="fade-right">
      {/* Name */}
      <div className="flex justify-center items-center gap-2">
        <FaUser className="text-black w-5 h-5"/>
        <input
          type="text"
          placeholder="Student Name"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          required
          className="input-style"
        />
      </div>

      {/* College */}
      <div className="relative flex justify-center items-center gap-2">
        <BiSolidSchool className="text-black w-6 h-6"/>
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={query}
          onFocus={() => setShowDropdown(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onChangeHandler(e);
            setShowDropdown(true);
          }}
          required
          className="input-style"
        />
        {showDropdown && (
          <ul className="absolute mt-50 z-10 bg-white w-full border border-gray-300 rounded-md max-h-40 overflow-y-auto shadow-md">
            {filteredColleges.length > 0 &&
              filteredColleges.map((college) => (
                <li
                  key={college}
                  onClick={() => handleSelect(college)}
                  className="px-4 py-2 text-sm text-[#006666] hover:bg-blue-100 cursor-pointer"
                >
                  {college}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* City */}
      <div className="flex justify-center items-center gap-2">
        <FaCity className="text-black w-6 h-6"/>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={onChangeHandler}
          required
          className="input-style"
        />
      </div>

      {/* Country */}
      <div className="flex justify-center items-center gap-2">
        <TbWorldPin className="text-black w-6 h-6"/>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={onChangeHandler}
          required
          className="input-style"
        />
      </div>

      {/* Phone */}
      <div className="flex justify-center items-center gap-2">
        {/* <MdContactPhone className="text-black w-6 h-6"/> */}
        <PhoneInput
  country={'in'}
  value={formData.phoneNumber}
  onChange={(phone) =>setFormData((prev) => ({ ...prev, phoneNumber: phone }))}
  placeholder="Phone Number"
  containerClass="input-style mb-2 "
  inputStyle={{border: 'none', backgroundColor: 'transparent', color: '#006666', borderRadius: '0',fontSize: '16px'}}
  buttonClass="!border-0 !bg-transparent"
  dropdownClass="!text-black"
  inputProps={{
    name: 'phoneNumber',
    required: true,
    autoFocus: true
  }}
/>
      </div>

      {/* Email */}
      <div className="flex justify-center items-center gap-2">
        <MdOutlineEmail className="text-black w-6 h-6"/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChangeHandler}
          required
          className="input-style"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <FaLock className="text-black w-6 h-6"/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChangeHandler}
          required
          className="input-style"
        />
      </div>
    </div>
    <Link to="/login" className="text-black"><u>I am already a member</u></Link>
    {/* Submit Button */}
    {loading?<SmallLoader />:<button
      type="submit"
      className="w-full mt-2 bg-[#006666] text-white py-2 rounded-md hover:bg-[#1e1e1e] transition duration-200 cursor-pointer"
    >
      Submit
    </button>}
  </form>}
  {
    isOtpSent&&<OTPInput setOTP={setOTP} handleSubmit={handleSubmit} email={formData.email} loading={loading}/>
  }
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-aos="fade-down">
    <div className="w-72 h-72 sm:w-96 sm:h-96" >
      <DotLottieReact
      src="https://lottie.host/6ad24d4c-da96-45d4-998c-2aa9fb451d59/i6dr7e9Uat.lottie"
      loop
      autoplay
    />
      {/* <Lottie animationData={animationData} loop={true} /> */}
    </div>
  </div>

  {/* Sign-Up Form */}
  
</div>

  );
};

export default UserRegistration;
