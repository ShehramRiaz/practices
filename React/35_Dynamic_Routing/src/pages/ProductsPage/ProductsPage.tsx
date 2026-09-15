import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from "../../hooks/useProducts";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const { products, loading, error } = useProducts();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Products</h1>
        <p>Browse our collection of products.</p>
      </header>

      {loading && <p>Loading...</p>}

      {error ? (
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
