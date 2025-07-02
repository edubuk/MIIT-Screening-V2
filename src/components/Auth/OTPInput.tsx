import React, { useRef, useState } from "react";
import SmallLoader from "../Loader/Loader";


interface OTPInputProps {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit:any;
  email:string;
  loading:boolean;
}
const OTPInput: React.FC<OTPInputProps> = ({setOTP,handleSubmit,email,loading}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    const enteredOtp = newOtp.join("");
    //console.log("OTP Entered:", enteredOtp);
    setOTP(enteredOtp);

    // Move to next input if value is not empty
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };



  const handleOTPSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <form
      onSubmit={handleOTPSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-lg text-center"
    >
      <h2 className="text-2xl font-semibold mb-4 text-[#006666]">Enter OTP</h2>
      <p className="text-black text-center mb-4">We’ve sent a 6-digit OTP to {email.toLowerCase()}. Please check your inbox or spam folder.</p>
      <div className="flex justify-center gap-2 mb-6">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el:any) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg text-[#006666] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      {loading?<SmallLoader />:<button
      onClick={handleOTPSubmit}
        type="submit"
        className="w-full bg-[#006666] text-white py-2 rounded-md hover:bg-[#1e1e1e] transition"
      >
        Verify OTP
      </button>}
    </form>
  );
};

export default OTPInput;
