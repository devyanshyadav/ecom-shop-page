import React from "react";
import Shop from "./Shop";
import CartSection from "./CartSection";
import { Routes, Route } from "react-router-dom";
import Electronics from "./Categories/Electronics";
import Jewelery from "./Categories/Jewelery";
import MensClothing from "./Categories/MensClothing";
import WomenClothing from "./Categories/WomenClothing";
import AllProducts from "./Categories/AllProducts";

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="carts" element={<CartSection />} />
          <Route path="/" element={<Shop />}>
            <Route path="all" element={<AllProducts />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="/men's clothing" element={<MensClothing />} />
            <Route path="/women's clothing" element={<WomenClothing />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
