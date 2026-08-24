type ProductData = {
  id: number;
  name: string;
  price: number;
};

type ProductProps = {
  name: string;
  price: number;
};

function Product({ name, price }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

function App() {
  const products: ProductData[] = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Tablet",
      price: 35000,
    },
    {
      id: 3,
      name: "Graphics Card",
      price: 100000,
    },
    {
      id: 4,
      name: "CPU",
      price: 50000,
    },
    {
      id: 5,
      name: "Casing",
      price: 8700,
    },
  ];

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </>
  );
}

export default App;
