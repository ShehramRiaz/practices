import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Products</h1>
        <p>Browse our collection of products.</p>
      </header>

      <section className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </main>
  );
}

export default ProductsPage;