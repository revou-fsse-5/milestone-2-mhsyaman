import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Online Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-300">
                Register
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-300">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
