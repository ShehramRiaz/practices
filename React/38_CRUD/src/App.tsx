import { Route, Routes } from "react-router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/products/edit/:id" element={<EditProductPage />} />
    </Routes>
  );
}

export default App;
