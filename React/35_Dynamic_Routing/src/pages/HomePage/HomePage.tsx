import { Link } from "react-router";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.subtitle}>Welcome to our store</p>

        <h1 className={styles.title}>
          Find Products You’ll Love
        </h1>

        <p className={styles.description}>
          Explore our collection of electronics, computers,
          accessories, furniture, and everyday products.
        </p>

        <Link
          to="/products"
          className={styles.button}
        >
          Browse Products
        </Link>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>20+ Products</h2>
          <p>
            Explore a variety of products across different
            categories.
          </p>
        </div>

        <div className={styles.feature}>
          <h2>Easy Navigation</h2>
          <p>
            Quickly browse products and view their details.
          </p>
        </div>

        <div className={styles.feature}>
          <h2>Product Details</h2>
          <p>
            Open any product to see its complete information.
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;