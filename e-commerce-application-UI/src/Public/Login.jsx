import React, { useState } from 'react';

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!otpSent) {
      // If OTP not sent, request OTP
      console.log('Requesting OTP for:', emailOrMobile);
      // Simulate OTP request, set otpSent to true
      setOtpSent(true);
    } else {
      // If OTP sent, perform login logic
      console.log('Logging in with OTP:', otp);
      // Reset form fields after login
      setEmailOrMobile('');
      setOtp('');
      setOtpSent(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        {!otpSent ? (
          <form onSubmit={handleLogin}>
            <p className="mb-4 text-sm">Get access to your Orders, Wishlist, and Recommendations</p>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Enter Email/Mobile number" 
                value={emailOrMobile} 
                onChange={(e) => setEmailOrMobile(e.target.value)} 
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="mb-4 text-sm">By continuing, you agree to Flipkart's <a href="#" className="text-blue-500 hover:underline">Terms of Use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.</p>
            <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Request OTP</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <p className="mb-4 text-sm">Enter OTP sent to {emailOrMobile}</p>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)} 
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Login</button>
          </form>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">New to Flipkart? <a href="register" className="text-blue-500 hover:underline">Create an account</a></p>
      </div>
    </div>
  );
};

export default Login;
