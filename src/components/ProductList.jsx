import React, { useEffect, useState } from "react";

const ProductList=({products,setProducts}) => {
    const handleDeleteProduct = (indexToDelete) => {
        const updatedProducts = products.filter((_, index) => index !== indexToDelete);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
      };
    
      return (
        <div className="mt-6 h-[30%]">
          <h2 className="text-xl font-semibold mb-4">Saved Products</h2>
          {products.length > 0 ? (
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">₹{product.price}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteProduct(index)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      );
    }
  export default ProductList;