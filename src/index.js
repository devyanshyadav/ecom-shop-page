import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Link} from "react-router-dom";
import { RiSearchLine, RiShoppingCart2Fill, RiMenu3Fill } from "react-icons/ri";
import { CartLength } from "./components/ProductDetails";


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
        <h1><Link to="all">DevStore</Link></h1>
        <span className="searchInput">
          <i>
            <RiSearchLine />
          </i>
          <input type="text" placeholder="Search for over 500 products" />
        </span>
        <span className="cartDiv">
          <Link to="carts">
            <i>
              <RiShoppingCart2Fill />
            </i>
          </Link>
       <CartLength/>

        </span>
      </header>
    <App />
  </BrowserRouter>
);

reportWebVitals();