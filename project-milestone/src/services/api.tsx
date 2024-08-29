import axios from "axios";

const API_PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";
const API_CATEGORIES_URL = "https://api.escuelajs.co/api/v1/categories";
const API_USERS_URL = "https://api.escuelajs.co/api/v1/users";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_PRODUCTS_URL);
    return response.data; // Mengembalikan data produk
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Melempar kesalahan untuk ditangani di tempat lain
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(API_CATEGORIES_URL);
    return response.data; // Mengembalikan data kategori
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Melempar kesalahan untuk ditangani di tempat lain
  }
};

// Fungsi untuk login pengguna
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_USERS_URL, { email, password });
    return response.data; // Mengembalikan data pengguna setelah login
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Melempar kesalahan untuk ditangani di tempat lain
  }
};

// Fungsi untuk mendaftar pengguna baru
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(API_USERS_URL, { name, email, password });
    return response.data; // Mengembalikan data pengguna setelah pendaftaran
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Melempar kesalahan untuk ditangani di tempat lain
  }
};
