import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast';
import UserRegistration from './components/Auth/UserRegistration';
import UserLogin from './components/Auth/UserLogin';
import RefundPolicy from './components/Legals/RefundPolicy';
import TermsAndConditions from './components/Legals/TermCond';
import CancellationPolicy from './components/Legals/CancellationPol';
import ContactUs from './components/Legals/ContactUs';
import PrivacyPolicy from './components/Legals/PrivacyPolicy';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Toaster /> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-up' element={<UserRegistration />}></Route>
        <Route path='/login' element={<UserLogin />}></Route>
        <Route path="/refund-policy" element={<RefundPolicy />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
        <Route path="/cancellation-policy" element={<CancellationPolicy />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </>
  )
}

export default App
