import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Success.module.css'
import { useSelector } from "react-redux";

export default function Success() {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  // useEffect(() => {
  //   setInterval(() => setCount((count) => count - 1), 1000);
  //   setTimeout(() => navigate("/"), 15000);
  // }, [navigate]);

  return (
    <>
    {isAuth &&     <div>
    <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-1024.png" className={classes['success-img']} width={150} height={150} />
    <h4 className={classes.success}>
      Your order have been placed successfully. You will be redirected in
       <span>{' '+count}</span> seconds
    </h4>
    </div>}
    </>
  );
}
