import React, { useEffect } from "react";
import classes from "./ProductSearch.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ProductSearch(props) {
  const navigate = useNavigate();

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
          height={200}
          width="auto"
          alt={props.title}
          className="border-radius-9"
        />
      </div>
      <div className={classes["card-body"]}>
        <h3 className={classes["card-title"]}>{props.title}</h3>
        <h6 className={classes["card-price"]}>Price : {`₹ ${props.price}`}</h6>
        {/* <h6 className={classes["card-discount"]}>
          Discount : {`${props.discountPercentage}%`}
        </h6> */}
        <div className={classes["rating-data"]}>
          <h6 className={classes["card-rating"]}>
            {`${props.rating}`}
            <i class="fa-sharp fa-regular fa-star fa-4xs"></i>
          </h6>
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
