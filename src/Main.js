// import React from "react";
// import ProductCategory from "./components/ProductCategory";
// import { RiSearchLine, RiShoppingCart2Fill, RiMenu3Fill } from "react-icons/ri";
// import { Routes, Route, Link} from "react-router-dom";
// import Electronics from "./Categories/Electronics";
// import Jewelery from "./Categories/Jewelery";
// import MensClothing from "./Categories/MensClothing";
// import WomenClothing from "./Categories/WomenClothing";
// import AllProducts from "./Categories/AllProducts";
// import Cart from "./Pages/Cart";

// const Main = () => {
//   return (
//     <>  
//      <header>
//         <h1>DevStore</h1>
//         <span className="searchInput">
//           <i>
//             <RiSearchLine />
//           </i>
//           <input type="text" placeholder="Search for over 500 products" />
//         </span>
//         <span className="cartDiv">
//           <Link to="carts">
//             <i>
//               <RiShoppingCart2Fill />
//             </i>
//           </Link>
//           <p>No Items</p>
//         </span>
//         <i>
//           <RiMenu3Fill />
//         </i>
//       </header>
//         <section className="ctgSection">
//           <ProductCategory />
//         </section>

//         <section className="prdtSection">
//           <Routes>
//           <Route path="/" element={<AllProducts />} />
//             <Route path="carts" element={<Cart/>} />
//             <Route path="all" element={<AllProducts />} />
//             <Route path="electronics" element={<Electronics />} />
//             <Route path="jewelery" element={<Jewelery />} />
//             <Route path="/men's clothing" element={<MensClothing />} />
//             <Route path="/women's clothing" element={<WomenClothing />} />
//           </Routes>
//         </section>

//     </>
//   );
// };

// export default Main;
