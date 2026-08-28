import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Laptop",
      price: 100000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Mouse",
      price: 2000,
      quantity: 2,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 5000,
      quantity: 1,
    },
  ]);

  function handleQuantityChange(id: number, step: 1 | -1) {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newItem: CartItem = {
            ...item,
            quantity: item.quantity + step,
          };

          return newItem;
        }

        return item;
      }),
    );
  }

  const itemCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmount = cartItems.reduce((acc, curr) => {
    const amount = curr.quantity * curr.price;
    return acc + amount;
  }, 0);

  return (
    <>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>

          <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
        </div>
      ))}

      <p>Items: {itemCount}</p>
      <p>Total: {totalAmount}</p>
    </>
  );
}

export default App;
