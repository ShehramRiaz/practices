import { useParams } from "react-router";
import products from "../../data/products";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className={styles.page}>
        <h1>Product Not Found</h1>
        <p>
          We couldn't find a product with ID {id}.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <span className={styles.category}>
          {product.category}
        </span>

        <h1 className={styles.name}>
          {product.name}
        </h1>

        <p className={styles.description}>
          {product.description}
        </p>

        <div className={styles.price}>
          ${product.price.toFixed(2)}
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;