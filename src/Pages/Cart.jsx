import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const Cart = (props) => {
  return (
    <>
      <section className="cartDivData">
        <div>
          <i onClick={props.onclickchange}>
            <RiDeleteBin7Line />
          </i>
          <span>
            <img src={props.img} />
            <p>{props.title}</p>
          </span>
          <span>
            <h3>${props.price}</h3>
          </span>
          <button>Buy Now</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
