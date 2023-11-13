import React, { useState } from "react";
import classes from "./Search.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/reducer/cart";


export default function Search({history}){
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchDispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
    searchDispatch(cartActions.searchProduct(keyword))
  };

  

  return (
    <form onSubmit={searchHandler}>
      <div className={classes["input-group"]}>
        <input
          className={classes["form-control"]}
          type="search"
          placeholder=" Search for products, and more..."
          onChange={(e)=>setKeyword(e.target.value)}
          />
        
        {/* <div className={classes.Searchicon}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div> */}
        {/* <div className={classes["input-group-append"]}>
          <button id="search_btn" className={classes["search-btn"]}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> */}
      </div>
    </form>
  );
}


