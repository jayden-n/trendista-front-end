import React from 'react';
import ProductsCard from './ProductCard';
import { ImCool } from 'react-icons/im';
const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Express yourself
        </h1>
        <ImCool className="text-5xl" />
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Discover <span className="text-orange-400"> Trendista</span>: Where
          fashion meets you. Explore our curated collection of trendy and
          affordable clothing. Shop now and express your unique style with
          confidence.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
