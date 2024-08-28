import React, { useState } from "react";
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";
// import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ProductCategory from "./pages/ProductCategory";
// import ProductDetail from "./pages/ProductDetail";
// import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" exact component={Login} /> Halaman default */}
        <Route
          path="/login"
          element={
            <Modal isOpen={true} onClose={handleCloseModal}>
              <Login />
            </Modal>
          }
        />
        <Route
          path="/register"
          element={
            <Modal isOpen={true} onClose={handleCloseModal}>
              <Register />
            </Modal>
          }
        />
        {/* <Route path="/category" component={ProductCategory} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={ShoppingCart} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
