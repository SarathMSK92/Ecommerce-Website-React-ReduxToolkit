import { ProductList } from "../data/ProductList";
import classess from "./ProductSearchDashboard.module.css";
import ProductSearch from "./ProductSearch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchProduct } from "../redux/reducer/cart";
import { useSelector } from "react-redux";

export default function ProductSearchDashboard(props) {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  let keyword = useSelector((state) => state.cart.keyword);

  const SearchHandler = () => {
    // let keyword = params.keyword;
    const _searchResults = ProductList.filter((product) => {
      return product.title.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
    });
    setSearchResults(_searchResults);
  };
  useEffect(SearchHandler, [searchResults]);

  return (
    <div className={classess["search-product-container"]}>
      <h1>Search Product List </h1>
      <div className={classess.display_product}>
        {isAuth &&
          searchResults.map((product) => (
            <ProductSearch {...product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
