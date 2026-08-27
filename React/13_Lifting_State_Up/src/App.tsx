import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type SearchBoxProps = {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
};

type ProductListProps = {
  searchTerm: string;
  products: Product[];
};

function SearchBox({ searchTerm, onSearchChange }: SearchBoxProps) {
  return (
    <input
      type="search"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search products"
    />
  );
}

function ProductList({ products, searchTerm }: ProductListProps) {
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {searchedProducts.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>
      ))}
    </>
  );
}

function App() {
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 100000 },
    { id: 2, name: "Mobile", price: 50000 },
    { id: 3, name: "Tablet", price: 40000 },
    { id: 4, name: "Keyboard", price: 5000 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ProductList searchTerm={searchTerm} products={products} />
    </>
  );
}

export default App;
