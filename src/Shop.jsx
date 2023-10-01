import React from "react";
import ProductCategory from "./components/ProductCategory";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <section className="ctgSection">
        <ProductCategory />
      </section>

      <section className="prdtSection">
        <Outlet />
      </section>
    </>
  );
};

export default Shop;
