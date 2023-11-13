import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ItemSummary from "../components/ItemSummary";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
