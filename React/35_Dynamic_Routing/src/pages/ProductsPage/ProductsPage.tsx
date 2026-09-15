import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";
import type { Product } from "../../types/product";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        // throw new Error("Fake Error");
        
        setProducts(products);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Products</h1>
        <p>Browse our collection of products.</p>
      </header>

      {loading && <p>Loading...</p>}

      {error !== "" ? (
        <p>{error}</p>
      ) : (
        <section className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}

export default ProductsPage;
