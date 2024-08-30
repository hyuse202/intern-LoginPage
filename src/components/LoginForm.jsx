'use client'
import { authenticate } from "@/utils/auth";
import { useState } from "react";
import LoadingSingle from "@/components/LoadingSingle";
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('')
    try {
      const result = await authenticate(username, password);
      console.log(result.message);
      setError('');
    } catch (error) {
      setError('User name or Password is incorrect.');
    }
    setTimeout(() => {
      setIsLoading(false);

    },50)
  };
  return (
      <div className="w-full h-4/5 flex items-center justify-center">

        <div className="relative space-y-2 flex flex-col w-[25rem] sm:w-[33rem] lg:w-[40rem] bg-white p-12 rounded-md shadow-lg">
          <h1 className="text-2xl font-black"> Sign in          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label className="px-4 text-gray-700 text-md font-bold mt-5 ">
            UsrName
            </label>
            <input 
            type = 'text' 
            placeholder="Enter your username" 
            className="py-4 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setUsername(e.target.value)}
            />
            <label className="px-3 text-gray-700 text-md font-bold mt-5 ">
            PassWord
            </label>
            <input 
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter your password" 
            className="py-4 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange = {(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <span
            //   type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 items-center justify-center right-48 top-48 px-3 py-2 text-purple-500 font-bold cursor-pointer text-sm select-none "
            >
              <p className="item-center">
              {showPassword ? "Hide psswrd" : "Show psswrd"}
              </p>
            </span>
            <button 
            className="w-full font-bold bg-purple-500 items-center justify-center text-center
             text-white py-3 rounded-2xl shadow-sm hover:bg-purple-600 mt-5
              focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
            // onClick={isLoading}

            > 
            {isLoading? <LoadingSingle/>: 'submit'}
            </button>

          </form>
        </div>
      </div>
  );
}
