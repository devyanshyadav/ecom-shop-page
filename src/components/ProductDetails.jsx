import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import CartItem from "../Pages/Cart";
import { v4 as uuidv4 } from "uuid";

let cartArray = [];

const ProductDetails = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTimeout(() => {
          setProducts(data);
          setIsLoading(false);
        }, 700);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const addToCart = (index) => {
    products.forEach((elem) => {
      if (elem.id === index) {
        cartArray.push({
          id: elem.id,
          title: elem.title,
          price: elem.price,
          img: elem.image,
        });
      }
    });
  };

  const categoryData = products.map((elem) => {
    if (props.ctg === elem.category || props.ctg === "all") {
      return (
        <div key={elem.id}>
          <img src={elem.image} alt={elem.title} />
          <span>
            <h3>{elem.title}</h3>
            <strong>${elem.price}</strong>
          </span>
          <button onClick={() => addToCart(elem.id)}>Add</button>
        </div>
      );
    }
    return null;
  });

  return <>{isLoading ? <Loader /> : categoryData}</>;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([...cartArray]);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteCartItem = (id, price) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    cartArray = [...updatedCart];
    setCartItems([...updatedCart]);
    setTotalPrice(totalPrice - price);
  };

  const cartItemsList = cartItems.map((item) => (
    <CartItem
      key={uuidv4()}
      onclickchange={() => deleteCartItem(item.id, item.price)}
      img={item.img}
      title={item.title}
      price={item.price}
    />
  ));

  useEffect(() => {
    const price = cartItems.reduce((total, elem) => total + elem.price, 0);
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <>
      <h3 className="TotalPrice">Total: ${totalPrice}</h3>
      {cartItemsList}
    </>
  );
};

const CartLength = () => {
  const [x, setx] = useState([...cartArray]);
  const [y, sety] = useState(0);
  useEffect(() => {
    setx(...cartArray);
  }, [x]);

  return <p>View Carts</p>;
};

export default ProductDetails;
export { cartArray as Array, Cart, CartLength };
