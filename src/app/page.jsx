"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin"); // Redirect to login page if not authenticated
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from localStorage
    router.push("/signin"); // Redirect to login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
}
