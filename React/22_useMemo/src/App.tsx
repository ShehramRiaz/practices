import { useMemo, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 100000 },
    { id: 2, name: "Phone", price: 50000 },
    { id: 3, name: "Keyboard", price: 7000 },
    { id: 4, name: "Mouse", price: 2000 },
  ]);

  const totalProducts = useMemo(() => {
    console.log("Calculating product count...");

    let productCount = 0;

    for (const product of products) {
      productCount++;
    }

    return productCount;
  }, [products]);

  const totalPrice = useMemo(() => {
    console.log("Calculating product prices...");

    let price = 0;

    for (const product of products) {
      price += product.price;
    }

    return price;
  }, [products]);

  function addDummyProduct() {
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), name: "Dummy", price: 500 },
    ]);
  }

  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Product Statistics</h1>
      <p>Total Products: {totalProducts}</p>
      <p>Total Price: {totalPrice}</p>

      <div>
        <label htmlFor="search">Name: </label>
        <input
          type="search"
          id="search"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <button onClick={() => setCount((prev) => prev + 1)}>Counter++</button>
      <p>Counter: {count}</p>
      <button onClick={addDummyProduct}>Add Dummy Product</button>
    </>
  );
}

export default App;
