import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";
import classes from './Cart.module.css'
import { useNavigate } from "react-router-dom";
import { cartActions } from "../redux/reducer/cart";

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(cartActions.modifyItem({ ...item, count: item.count + 1 }));
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(cartActions.removeItem(item));
    } else {
      dispatch(cartActions.modifyItem({ ...item, count: item.count - 1 }));
    }
  };

  const removeItemFromCart = (item) => {
    dispatch(cartActions.removeItem(item));
  };

  return (
    <div lassName={classes['cart-container']}>
    <div className={classes['cart-info']}>
      {list.length > 0 ? (
        <>
       { list.map((item) => (
          <ProductListItem
            {...item}
            key={item.id}
            incrementItem={() => incrementItem(item)}
            decrementItem={() => decrementItem(item)}
            removeItem={() => removeItemFromCart(item)}
          /> 
        ))}        
        <div className={classes['delivery-address']}>
          <span className={classes['address-label']}>Delivery Address :  </span>
          <input className={classes['address-input']} placeholder="Please Enter Your Delivery Address"/>
        </div>
        <button className={classes.checkout} onClick={()=> navigate('/checkout')}>CHECKOUT</button>
        </>
      ) : (
        <h3 className={classes.noitem}>No Items in the cart..!</h3>
      )}
    </div>


    </div>

  );
}
