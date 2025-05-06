import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Image from "../assets/image.png";

function Login() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await axios.post(
        'https://reqres.in/api/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
          }
        }
      );
  
      const token = response.data.token;
  
      if (token && password === "tailwind") {
        localStorage.setItem('token', token);

        navigate('/home');
        window.location.reload();

      } else {
        alert("No token received");
      }
  
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  }
  

  return (
    <div className="flex ">
    <div className=" login-left flex flex-grow h-screen bg-[#E9E9E9] justify-center items-center">
      <img className='w-[400px]' src={Image} alt="" />
    </div>
    <div className="login-right flex-grow h-screen ">
      <div className="h-full w-[100%]  mx-auto flex flex-col justify-center">
        <div className="self-center pt-[50px]">
          {/* <img className='w-[50px]' src={Logo} alt="" /> */}
        </div>
        <div className="text-center flex flex-col items-center justify-between  h-[40%]">
          <div className="welcome">
          <h2 className='text-[3.5rem] font-bold'>Welcome back!</h2>
          <p className='text-[20px]'>Please enter your details</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-8 mt-4  w-[90%]  h-[60%]'>
            <input className='w-full  border-b border-black outline-none box-border' type="email" placeholder="Email" value={email} onChange={e => setEmail (e. target.value)} />
            <div className="w-full pass-input-div relative flex">
              <input className='w-full  mb-4 border-b border-black outline-none box-border' type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={e => setPassword (e. target.value)} />
              {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
              
            </div>
              <button onClick={handleLogin}  className='h-10 w-90 rounded-xl border-none bg-black text-white text-[17px] cursor-pointer font-semibold'>Log In</button>
              
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
