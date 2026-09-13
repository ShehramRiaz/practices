import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
