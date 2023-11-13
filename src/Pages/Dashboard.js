import ProductCard from "../components/ProductCard";
import { ProductList } from "../data/ProductList";
import classess from "./Dashboard.module.css";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  console.log("Product List Length is : " + ProductList.length);
  return (
    <div>
      <div className={classess.display_product}>
        {isAuth &&
          ProductList.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
      </div>
    </div>
  );
}
