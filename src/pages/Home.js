import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
//import Product
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  //get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full sm:mt-10">
            <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              PRODUCTS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900" >
              MOST POPULAR PRODUCTS
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
