import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import classes from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/reducer/cart";

export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const [alert, setAlert] = useState(false);

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === props.id);
  const original_price = props.price;
  const offer_price = props.price - props.discountPercentage;

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
    dispatch(cartActions.addItem(props));
  };

  return (
    <div>
      <div className={classes["alert-container"]}>
        {alert && (
          <span className={classes["alert-success"]}>Item added to cart</span>
        )}
      </div>
      {isAuth && (
        <div className={classes.card}>
          <div className="thumbnail">
            <img
              src={props.image}
              height={400}
              width="auto"
              alt={props.title}
              className="border-radius-9"
            />
          </div>
          <div className={classes["card-body"]}>
            <h3 className={classes["card-title"]}>{props.title}</h3>
            <h6 className={classes["card-info"]}>
              <span>Description - </span>
              {props.description}
            </h6>
            <h6 className={classes["card-info"]}>
              <span>Brand - </span>
              {props.brand}
            </h6>

            <h6 className={classes["card-info"]}>
              <span>Category - </span>
              {props.category}
            </h6>

            <h6 className={classes["card-info"]}>
              <span>Stocks - </span>
              {props.stock}
            </h6>
            <h6 className={classes["card-price"]}>
              MRP :
              <span className={classes.strikeout}>{`₹ ${original_price}`}</span>{" "}
              {`₹ ${offer_price}`}
            </h6>

            <div className={classes["card-discount"]}>
              {`(You have saved ${props.discountPercentage}.Rs)`}
            </div>

            <h6 className={classes["card-rating"]}>
              {`${props.rating}`}
              <i class="fa-sharp fa-regular fa-star fa-4xs"></i>
            </h6>
            <div className={classes["stock-btn"]}>
              {props.stock > 0 ? (
                <>
                  <button
                    className={classes["btn-available"]}
                    onClick={() => navigate(`/checkout/${props.id}`)}
                  >
                    Buy Now
                  </button>
                  {element?.count > 0 ? (
                    <button
                      className={classes["btn-gotocart"]}
                      onClick={() => navigate("/cart")}
                    >
                      Go To Cart
                    </button>
                  ) : (
                    <button
                      className={classes["btn-available-cart"]}
                      onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                  )}
                </>
              ) : (
                <button className={classes["btn-out"]}>Out of Stock</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
