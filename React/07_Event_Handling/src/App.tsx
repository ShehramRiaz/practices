import "./App.css";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  onDelete: (id: number) => void;
};

type ProductData = Omit<ProductProps, "onDelete">;

function Product({ id, name, price, onDelete }: ProductProps) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <li className="product__item">
      <div className="product__info">
        <div className="product__name">{name}</div>
        <div className="product__price">{price}</div>
      </div>

      <button className="product__delete" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

function App() {
  const products: ProductData[] = [
    {
      id: 1,
      name: "Laptop",
      price: 96000,
    },

    {
      id: 2,
      name: "Mobile",
      price: 42000,
    },

    {
      id: 3,
      name: "Hoodie",
      price: 4000,
    },

    {
      id: 4,
      name: "Coding Shirt",
      price: 2500,
    },

    {
      id: 5,
      name: "Graphics Card",
      price: 250000,
    },
  ];

  function deleteProduct(id: number) {
    console.log(`Deleted product: ${id}`);
  }

  return (
    <>
      <h1>Products</h1>
      <ul className="product__list">
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            onDelete={deleteProduct}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
