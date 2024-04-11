import React, { useState } from 'react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [registrationMethod, setRegistrationMethod] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here, such as sending data to a server
    console.log('Registration data:', { fullName, registrationMethod, email, mobile, password });
    // Reset form fields after submission
    setFullName('');
    setRegistrationMethod('');
    setEmail('');
    setMobile('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Choose Registration Method:</label>
            <select
              value={registrationMethod}
              onChange={(e) => setRegistrationMethod(e.target.value)}
              required
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="">Choose Registration Method</option>
              <option value="email">Email</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          {registrationMethod === 'email' && (
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          {registrationMethod === 'mobile' && (
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Mobile" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Create your account</button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">By creating an account, you agree to Flipkart's <a href="#" className="text-blue-500 hover:underline">Terms of Use</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.</p>
      </div>
    </div>
  );
};

export default Register;
