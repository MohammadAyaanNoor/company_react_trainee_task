import React, { useState, useEffect } from "react";


const AddProductForm=({onAddProduct})=> {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
  
    const handleAddProduct = () => {
      if (!productName || !productPrice) return;
      const newProduct = { name: productName, price: productPrice };
      onAddProduct(newProduct);
  
      const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
      existingProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(existingProducts));
  
      setProductName("");
      setProductPrice("");
    };
  
    return (
      <div className="bg-white mt-5 pb-5 h-[20%] rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold">Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddProduct}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </div>
    );
  }
export default AddProductForm;