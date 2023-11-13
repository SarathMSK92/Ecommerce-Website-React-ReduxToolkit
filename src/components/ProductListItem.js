import React from "react";
import classes from "./ProductListItem.module.css";   

export default function ProductListItem(props) {
  const original_price = props.price;
  const offer_price = props.price - props.discountPercentage;
  const total_amount = props.price * props.count; 

  return (
    <div>
    <div className={classes.card}>
      <div className={classes.thumbnail}>
        {/* <h3>{props.brand}</h3> */}
        <img
          src={props.thumbnail}
          height={100}
          width="auto"
          alt={props.title}
          className="border-radius-9"
        /><h3 className="card-title">{props.title}</h3>
      </div>
      
        <div className={classes['item-info']}>
          {/* <h4 className={classes['card-price']}>MRP :{` ₹ ${offer_price}`}</h4>
          <h4 className="card-discount">
          Discount : {`${props.discountPercentage}.Rs`}
          </h4>
          <h4 className="card-discount">
          Total Amount : {`${total_amount}.Rs`}
          </h4> */}

        <table  cellspacing="30" cellPadding="15" >
        <thead>
            <tr>
                <th>MRP</th>
                <th>Discount</th>
                <th>Total Amount</th>
              </tr>
        </thead>
      <tbody>
        <tr>
            <td className={classes['card-price']}><span className={classes.strikeout}>{`₹ ${original_price}`}</span> {`₹ ${offer_price}`}</td>         
            <td className={classes['card-discount']}>{`${props.discountPercentage}.Rs`}</td>
            <td>{`${total_amount}.Rs`}</td>
        </tr>
        </tbody>
        </table>
        </div>

        <div> 
   
        </div>
     
        {/* <h4 className="card-rating">Rating : {`${props.rating}`}</h4> */}
        <div>      
            <button className={classes["btn-out"]} onClick={props.decrementItem}>-</button>
            <span className={classes.qty}>{props.count}</span>
            <button className={classes["btn-out"]} onClick={props.incrementItem}>+</button>  
            <button className={classes["btn-out-remove"]} onClick={props.removeItem}><i class="fa-solid fa-trash"></i></button>       
      </div>
    </div>  
    </div>
  );
}
