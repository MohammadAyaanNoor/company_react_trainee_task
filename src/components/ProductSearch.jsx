import React, { useState, useEffect } from "react";

const ProductSearch=()=> {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      const allProducts = JSON.parse(localStorage.getItem("products")) || [];
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, [searchTerm]);


  
    return (
      <div className="mt-6  h-40">
        <h2 className="text-xl font-semibold mb-4">Search Products</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filteredProducts.length > 0 ? (
          <ul className="space-y-4">
            {filteredProducts.map((product, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">₹{product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No matching products found.</p>
        )}
      </div>
    );
  }
  export default ProductSearch;