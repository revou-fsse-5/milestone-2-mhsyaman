import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Miscellaneous",
  ];

  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4 ml-4 mt-14">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li
            key={category}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
