import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ProductCategory = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [category, setCategory] = useState([]);
  const categoryImg = [
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEpld2Vscnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories();
  }, []);

  const handleClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <>
      <div className={activeCategory === null ? "ctgSectionActive" : ""}>
        <span>
          <img src="https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </span>
        <Link to="all" onClick={() => handleClick(null)}>
          <p>All</p>
        </Link>
      </div>
      {category.map((elem, i) => (
        <div key={i} className={activeCategory === i ? "ctgSectionActive" : ""}>
          <span>
            <img src={categoryImg[i]} />
          </span>
          <Link to={elem} onClick={() => handleClick(i)}>
            <p>{elem.charAt(0).toUpperCase() + elem.slice(1)}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCategory;
