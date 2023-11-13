import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./Success";
import ProductSearchDashboard from "./ProductSearchDashboard";
import ProductInfo from "./ProductDetail";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import { Fragment } from "react";
import classes from "./Home.module.css";
import ItemSummary from "../components/ItemSummary";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {!isAuth && <Login />}
      {isAuth && <Header />}
      {
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/search/:keyword" element={<ProductSearchDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/">
            <Route path="" element={<Checkout />} />
            <Route path=":id" element={<Checkout />} />
          </Route>
          <Route path="/itemsummary" element={<ItemSummary />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      }
    </Fragment>
  );
}
