import React, { useState } from "react";
import { registerUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { X } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await registerUser(name, email, password); // Memanggil fungsi registerUser
      console.log("User registered:", userData);
      setSuccess("Registration successful! You can now log in.");
      setError(""); // Reset error message
    } catch (error) {
      setError("Registration failed. Please try again.");
      setSuccess(""); // Reset success message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-56 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* Exit button */}
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200"
        >
          <X size={24} className="text-gray-600"/>
        </button>

        <img
          className="mx-auto h-40 w-auto"
          src="https://www.svgrepo.com/show/354568/woocommerce.svg?color=indigo&shade=600"
          alt="Your Company"
        />

        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 hover:underline">
            Sudah memiliki akun? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
