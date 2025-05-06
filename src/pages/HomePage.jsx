import React, { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  ProductSearch from "../components/ProductSearch";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";


const HomePage = () => {
  
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAddProduct = (newproduct) => {
    const exists = products.some(p => p.name.toLowerCase() === newproduct.name.toLowerCase());
    if (!exists) setProducts([...products, newproduct]);
    else alert("Duplicate product");
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex justify-evenly h-screen items-center">
    <div className=" w-[40%] h-[100%]   flex-col gap-10">
      <h1 className="text-3xl font-bold text-center">Add Products</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} setProducts={setProducts} />
      <ProductSearch />

    </div>

    <button onClick={handleLogout} className="text-2xl h-13 rounded-[13px] w-30 bg-red-400 text-white p-10">logout</button>
    </div>
  );
};

export default HomePage;
