import { createContext, useContext, useReducer, type ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Action =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "CLEAR_CART" };

const products: Product[] = [
  { id: 1, name: "Keyboard", price: 50 },
  { id: 2, name: "Mouse", price: 30 },
  { id: 3, name: "Monitor", price: 200 },
];

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find(
        (item) => item.product.id === action.product.id,
      );

      if (existingItem) {
        return state.map((item) =>
          item.product.id === action.product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...state,
        {
          product: action.product,
          quantity: 1,
        },
      ];
    }

    case "REMOVE_FROM_CART": {
      const existingItem = state.find((item) => item.product.id === action.id);

      if (!existingItem) {
        return state;
      }

      if (existingItem.quantity > 1) {
        return state.map((item) =>
          item.product.id === action.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        );
      }

      return state.filter((item) => item.product.id !== action.id);
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

type CartContextValue = {
  cart: CartItem[];
  dispatch: React.Dispatch<Action>;
};

const CartContext = createContext<CartContextValue | null>(null);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

function AddButton({ product }: { product: Product }) {
  const { dispatch } = useCart();

  function handleAdd() {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  return <button onClick={handleAdd}>Add to Cart</button>;
}

function ProductList() {
  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>{" "}
          <AddButton product={product} />
        </div>
      ))}
    </section>
  );
}

function Cart() {
  const { cart, dispatch } = useCart();

  function handleRemove(id: number) {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  }

  function handleClear() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <section>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.product.id}>
              <span>
                {item.product.name} - ${item.product.price} × {item.quantity}
              </span>{" "}
              <button onClick={() => handleRemove(item.product.id)}>
                Remove
              </button>
            </div>
          ))}

          <p>Total: ${total}</p>

          <button onClick={handleClear}>Clear Cart</button>
        </>
      )}
    </section>
  );
}

function App() {
  return (
    <CartProvider>
      <h1>Shopping App</h1>

      <ProductList />

      <Cart />
    </CartProvider>
  );
}

export default App;
