import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {remove} from "../store/cartSlice"

const Cart = () => {
  const products = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();

  //function
  const handleRemove = (productID) =>{
    dispatch(remove(productID));
  }
  
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => {
          return (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt=" " />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button onClick={()=>handleRemove(product.id)} className="btn">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
