import ProductList from "./components/ProductList/ProductList";
import type { Product } from "./types/Product";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Comfortable wireless headphones with high-quality sound.",
    price: 49.99,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with responsive switches.",
    price: 79.99,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI.",
    price: 39.99,
  },
  {
    id: 4,
    name: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI and USB connections.",
    price: 29.99,
  },
  {
    id: 5,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 34.99,
  },
];

function App() {
  return (
    <>
      <h1>Products</h1>

      <ProductList products={products} />
    </>
  );
}

export default App;
