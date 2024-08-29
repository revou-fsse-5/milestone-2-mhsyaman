import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { fetchProducts, fetchCategories } from "../services/api";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Memanggil fungsi fetchProducts
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    const getCategories = async () => {
      try {
        const data = await fetchCategories(); // Memanggil fungsi fetchCategories
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    getProducts();
    getCategories();
  }, []);

  return (
    // pop up tampilan awal
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <h1 className="text-4xl font-bold mb-4">Welcome to My Online Store</h1>
    //   <p className="text-lg mb-8">Find the best products at amazing prices!</p>
    //   <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
    //     Shop Now
    //   </button>
    //   {/* Tambahkan lebih banyak konten di sini, seperti daftar produk, kategori, dll. */}
    // </div>

    <div className="flex p-4">
      <Sidebar />
      <div className="flex-1 p-4 mt-14">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Online Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.category.name}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
