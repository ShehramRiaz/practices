import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "Electronics" | "Clothing" | "Accessories";
  price: number;
};

type SearchBoxProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

type CategoryFilterProps = {
  category: Product["category"] | null;
  onCategoryChange: (category: Product["category"] | null) => void;
};

type ProductListProps = {
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

function CategoryFilter({ category, onCategoryChange }: CategoryFilterProps) {
  return (
    <select
      value={category ?? "All"}
      onChange={(e) =>
        e.target.value === "All"
          ? onCategoryChange(null)
          : onCategoryChange(e.target.value as Product["category"])
      }
    >
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Accessories">Accessories</option>
    </select>
  );
}

function ProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.category} - {product.price}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 100000 },
    { id: 2, name: "Phone", category: "Electronics", price: 50000 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 3000 },
    { id: 4, name: "Hoodie", category: "Clothing", price: 5000 },
    { id: 5, name: "Watch", category: "Accessories", price: 8000 },
    { id: 6, name: "Keyboard", category: "Electronics", price: 7000 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<Product["category"] | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesCategory = category === null || product.category === category;

    return matchesName && matchesCategory;
  });

  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  function handleCategoryChange(category: Product["category"] | null) {
    setCategory(category);
  }

  return (
    <>
      <h1>Product Explorer</h1>

      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <CategoryFilter
        category={category}
        onCategoryChange={handleCategoryChange}
      />

      <p>Products found: {filteredProducts.length}</p>

      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
