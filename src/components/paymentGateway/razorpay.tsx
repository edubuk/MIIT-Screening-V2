import React, { useState, useEffect } from "react";
// import ConfettiExplosion from "react-confetti-explosion";
import axios from "axios";
import toast from "react-hot-toast";
//import Razorpay from "razorpay";
import SmallLoader from "../Loader/Loader";
import { useAuth } from "../../context/auth";

interface Props {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessPopup:React.Dispatch<React.SetStateAction<boolean>>;
}

interface payload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  couponCode?: string;
  emailId: string;
  userName: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const PaymentPopup: React.FC<Props> = ({ showPopup, setShowPopup,setShowSuccessPopup }) => {
  const [amount, setAmount] = useState<number>(499);
  const [curr, setCurr] = useState<string>("INR");
  const [loading, setLoading] = useState<boolean>(false);
  const [auth] = useAuth();
  const checkOutHandler = async () => {
    try {
      setLoading(true);
      const orderRes = await axios.post(
        `${API_BASE_URL}/api/v1/user/checkout`,
        { amount: amount * 100, curr: curr }, // Send amount in paise
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("order", orderRes.data.order.id);
      if (orderRes.data.success) {
        const options = {
          key: import.meta.env.VITE_Rz_Key,
          amount: amount * 100,
          currency: curr,
          name: "Edubuk (Eduprovince Technologies Private Limited)",
          description: "International AI & New Tech Olympiad",
          order_id: orderRes.data.order.id,
          handler: async (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) => {
            try {
              const payload: payload = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                emailId: auth.user.email || "ajeetramverma10@gmail.com",
                userName: auth.user.name || "Ajeet",
              };

              const res = await axios.post(
                `${API_BASE_URL}/api/v1/user/payment-verification`,
                payload,
                { headers: { "Content-Type": "application/json" } }
              );

              if (res.data.success) {
                setShowSuccessPopup(true);
                toast.success("Payment successful.");
                setShowPopup(false);
                setLoading(false);
                localStorage.setItem("paymentId", res.data.paymentId);
              } else {
                toast.error("Payment verification failed.");
                setLoading(false);
              }
            } catch (error) {
              console.error("Error during payment verification:", error);
              toast.error("Something went wrong.");
              setLoading(false);
            }
          },
          theme: { color: "#006666" },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      } else {
        console.error("Order creation failed.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
  
    // Dynamically add Razorpay script to the document
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30 h-full w-full">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full  md:w-1/2 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                <img
                  src="/animateImg.gif"
                  alt="Resume Animation"
                  className="w-50 h-50 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <h2 className="text-[#006666] text-xl font-semibold mb-4">
                  Choose your currency as per your country
                </h2>

                <div className="relative"></div>
                <div className="flex items-center gap-4 mt-4">
                  <p className="text-xl">
                    <strong className="text-[#006666]">{`${curr} ${amount}`}</strong>{" "}
                    Only
                  </p>
                  {!loading ? (
                    <div className="flex flex-col gap-2">
                      <div className="relative inline-block w-auto">
                        <select
                          onChange={(e: any) => {
                            setCurr(e.target.value);
                            e.target.value === "INR"
                              ? setAmount(499)
                              : e.target.value === "AED"? setAmount(50)
                              :e.target.value==="SGD"?setAmount(50):setAmount(30);
                          }}
                          className="w-full px-2 py-1 border text-center border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        >
                          <option value="">Select Currency</option>
                          <option value="INR">INR</option>
                          <option value="AED">AED</option>
                          <option value="SGD">SGD</option>
                          <option value="USD">USD</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                          ▼
                        </div>
                      </div>
                      <button
                        className="rounded-lg bg-[#007bff] py-2 px-4 text-white cursor-pointer active:translate-y-1"
                        onClick={checkOutHandler}
                      >
                        Pay Now To Register
                      </button>
                    </div>
                  ) : (
                    <SmallLoader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentPopup;
