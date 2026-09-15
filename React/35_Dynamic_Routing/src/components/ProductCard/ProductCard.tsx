import { Link } from "react-router";
import styles from "./ProductCard.module.css";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.category}>{product.category}</span>

      <h2 className={styles.name}>{product.name}</h2>

      <p className={styles.description}>
        {product.description.slice(0, 120)}...
      </p>

      <div className={styles.footer}>
        <strong className={styles.price}>${product.price.toFixed(2)}</strong>

        <Link className={styles.link} to={`/products/${product.id}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
