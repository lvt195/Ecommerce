import React, { useEffect, useState, useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
//import Product
import Product from "../components/Product";

const AllProduct = () => {
  const [isActive, setIsActive] = useState(false);
  const { products } = useContext(ProductContext);
  return (
    <div className="container mx-auto  mt-12 ">
      <section className="py-16 sm:mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full pad">
            <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              PRODUCTS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              ALL PRODUCTS
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AllProduct;
