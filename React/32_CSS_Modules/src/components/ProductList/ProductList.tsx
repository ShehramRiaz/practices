import type { ProductsListProps } from "../../types/Product";
import styles from "./ProductList.module.css";

function ProductList({ products }: ProductsListProps) {
  return (
    <ul className={styles.list}>
      {products.map((p) => (
        <li key={p.id} className={styles.item}>
          {p.name}: {p.description} - {p.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
