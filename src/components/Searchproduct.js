import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function Searchproduct() {
  const {SearchProduct, SearchName } = useSelector((state) => state.search);
  console.log("object procuct", SearchProduct, SearchName);
  return (
    <div>
      <div>
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full sm:mt-10">
              <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1 ">
                Search Results for '{SearchName}'
              </h2>
            </div>
            {SearchProduct?.length === 0 ? (
              <div className="h-screen mt-10 text-center">No result is found</div>) : 
            (
              <div>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center">
                  There are {SearchProduct?.length} products found
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                  {SearchProduct?.map((product) => {
                    return <Product product={product} key={product.id} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
