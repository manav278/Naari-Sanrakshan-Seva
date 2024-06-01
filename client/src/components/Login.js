import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // try {
    //   const response = await axios.post('https://your-backend-api.com/login', { email, password });
    //   // Handle successful login (e.g., save token, redirect)
    //   console.log(response.data);
    // } catch (error) {
    //   setError('Login failed');
    //   console.error(error);
    // }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-[#42a399] hover:bg-[#009688]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
