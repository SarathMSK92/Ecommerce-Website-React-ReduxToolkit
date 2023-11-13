import React from "react";
import classes from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../data/ProductList";

export default function ProductCard(props) {
  const navigate = useNavigate();

  const original_price = props.price;
  const offer_price = props.price - props.discountPercentage;

  return (
    <div
      className={classes.card}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div className="thumbnail">
        {/* <h3>{props.brand}</h3> */}
        <img
          src={props.image}
          height={100}
          width="auto"
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className={classes["card-body"]}>
        <h3 className={classes["card-title"]}>{props.title}</h3>
        <div className={classes["card-price"]}>
          MRP :
          <span className={classes.strikeout}>{`₹ ${original_price}`}</span>{" "}
          {`₹ ${offer_price}`}
        </div>
        <div className={classes["card-discount"]}>
          {`${props.discountPercentage}.Rs off`}
        </div>
        {/* <div className={classes['card-qty']}>Available Stocks : {props.stock}</div> */}
        <div className={classes["rating-data"]}>
          <h1 className={classes["card-rating"]}>
            {`${props.rating}`}
            <i class="fa-sharp fa-regular fa-star fa-4xs"></i>
          </h1>
        </div>
        {/* <div>
          {props.stock > 0 ? (
            <button className={classes["btn-available"]}>Available</button>
          ) : (
            <button className={classes["btn-out"]}>Out of Stock</button>
          )}
        </div> */}
      </div>
    </div>
  );
}
