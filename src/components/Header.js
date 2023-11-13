import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { updateFilter, clearFilter } from "../actions/productsActions";
import { SEARCH_PRODUCT } from "../actions/constants";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/reducer/auth";
import { useSelector } from "react-redux";
import MSKCartLogo from "../images/mskcart6.png";

export default function Header() {
  const navigate = useNavigate();
  const searchDispatch = useDispatch();
  const logoutDispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const onSearchTextUpdate = (type, payload) => {
    searchDispatch(updateFilter(SEARCH_PRODUCT, payload));
  };
  const logoutHandler = () => {
    logoutDispatch(authActions.logout());
  };
  return (
    <div className={classes["bg-secondary"]}>
      <div className={classes["saracart-logo"]}>
        <Link to="/">
          <span>M</span>SK-<span>C</span>art
        </Link>
      </div>
      <div className={classes.row}>
        <div className={classes["home-col-alignment"]}>
          <button className={classes["home-btn"]} onClick={() => navigate("/")}>
            <i class="fa-sharp fa-solid fa-house fa-lg"></i>
          </button>

          <div className={classes["search-container"]}>
            <Search onInputUpdate={onSearchTextUpdate} />
          </div>

          <button
            className={classes["cart-btn"]}
            onClick={() => navigate("/cart")}
          >
            <i class="fa-sharp fa-solid fa-cart-shopping fa-lg"></i>
          </button>
          {isAuth && (
            <button
              className={classes["logout-button"]}
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
