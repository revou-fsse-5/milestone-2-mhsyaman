import React, { useState } from "react";
import { loginUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom"
import { X } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password); // Memanggil fungsi loginUser
      console.log("User logged in:", userData);
      // Lakukan sesuatu setelah login berhasil, seperti menyimpan token atau mengarahkan pengguna
      navigate('/dashboard');
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-56 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {/* Exit button */}
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <img
          className="mx-auto h-40 w-auto"
          src="https://www.svgrepo.com/show/354568/woocommerce.svg?color=indigo&shade=600"
          alt="Your Company"
        />

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/register" className="text-blue-600 hover:underline">
            Belum punya akun? Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
