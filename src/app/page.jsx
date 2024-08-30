'use client'
import Header from "./Header";
import { authenticate } from "@/utils/auth";
import { useState } from "react";
import LoadingSingle from "@/components/LoadingSingle";
export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('')
    try {
      const result = await authenticate(username, password);
      console.log(result.message);
      setError('');
    } catch (error) {
      setError('Email or Password is incorrect.');
    }
    setTimeout(() => {
      setIsLoading(false);

    },50)
  };
  return (
    <div className="w-full h-full bg-slate-600 overflow-hidden">
      <Header/>
      <div className="w-full h-4/5 flex items-center justify-center">

        <div className="relative space-y-6 flex flex-col w-[25rem] sm:w-[33rem] lg:w-[40rem] bg-white p-12 rounded-md shadow-lg">
          <h1 className="text-2xl font-black"> Sign in          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

            <input 
            type = 'text' 
            placeholder="User Name" 
            className="py-2 px-4 border-2 border-opacity-50 border-white"
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type = 'text' 
            placeholder="PassWord" 
            className="py-2 px-4 border-2 border-opacity-50 border-white"
            onChange = {(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button 
            className="w-full font-bold bg-purple-500 items-center justify-center text-center text-white py-3 rounded-xl shadow-sm hover:bg-purple-700"
            disabled={isLoading}
            // onClick={isLoading}

            > 
            {isLoading? <LoadingSingle/>: 'submit'}
            
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
