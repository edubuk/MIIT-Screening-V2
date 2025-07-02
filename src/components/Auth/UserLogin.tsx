import { useEffect, useState} from "react";
import {FaLock} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import SmallLoader from "../Loader/Loader";

const UserLogin = () => {

  const [emailId, setEmailId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading,setLoading] = useState<boolean>(false);
  const [auth,setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogin = async(e:any)=>{
    e.preventDefault();
    try {
      setLoading(true);
      let data:any = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`,{
        method:"POST",
        body:JSON.stringify({email:emailId,password:password}),
        headers:{
          "Content-Type":"application/json"
        }
      })

      data = await data.json();
      console.log("data",data);
      if(data.success)
      {
        toast.success(data.message);
        setAuth({...auth,user:data.user,token:data.token});
        localStorage.setItem("auth", JSON.stringify(data));
        setLoading(false);
        navigate("/#register");
      }
      else if(!data.success)
      {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
      console.log("error while user login",error);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);


  return (
    <div className="flex flex-col-reverse md:flex-row items-center min-h-screen justify-center px-4 py-8 bg-white">
  {/* Lottie Animation */}
  <form
    onSubmit={handleLogin}
    className="p-6 md:p-8 rounded-lg w-full max-w-xl space-y-8"
    id="register"
    data-aos="fade-up"
  >
    <h2 className="text-2xl font-bold text-start text-[#006666]">Login</h2>

    <div className="grid grid-cols-1 gap-x-4 gap-y-6" data-aos="fade-right">
      {/* Name */}
      <div className="flex justify-center items-center gap-2">
        <MdOutlineEmail className="text-black w-5 h-5"/>
        <input
          type="text"
          placeholder="Email Id"
          name="email"
          value={emailId}
          onChange={(e)=>setEmailId(e.target.value.toLocaleLowerCase())}
          required
          className="input-style"
        />
      </div>

      {/* College */}
      <div className="flex justify-center items-center gap-2">
        <FaLock className="text-black w-6 h-6"/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          required
          className="input-style"
        />
      </div>
    </div>
    <Link to="/sign-up" className="text-black"><u>New Member ? Sign-Up</u></Link>
    {/* Submit Button */}
    {loading?<SmallLoader />:<button
      type="submit"
      className="w-full mt-2 bg-[#006666] text-white py-2 rounded-md hover:bg-[#1e1e1e] transition duration-200"
    >
      Submit
    </button>}
  </form>
  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0" data-aos="fade-down">
    <div className="w-72 h-72 sm:w-96 sm:h-96">
      <DotLottieReact
      src="https://lottie.host/6ad24d4c-da96-45d4-998c-2aa9fb451d59/i6dr7e9Uat.lottie"
      loop
      autoplay
    />
    </div>
  </div>
  
</div>

  );
};

export default UserLogin;
