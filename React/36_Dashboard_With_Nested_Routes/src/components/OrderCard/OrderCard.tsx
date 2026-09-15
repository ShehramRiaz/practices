import { Link } from "react-router";
import type { Order } from "../../types/orders";
import styles from "./OrderCard.module.css";

type OrderCardProps = {
  order: Order;
};

function OrderCard({ order }: OrderCardProps) {
  const statusClass =
    order.status.toLowerCase() === "delivered"
      ? styles.delivered
      : order.status.toLowerCase() === "processing"
        ? styles.processing
        : styles.shipped;

  return (
    <div className={styles.card}>
      <span className={styles.id}>#{order.id}</span>

      <div className={styles.product}>
        <div className={styles.productIcon}>▣</div>
        <div>
          <strong>{order.product}</strong>
          <span>Order #{order.id}</span>
        </div>
      </div>

      <span className={`${styles.status} ${statusClass}`}>
        <span className={styles.dot} />
        {order.status}
      </span>

      <strong className={styles.total}>
        ${order.total.toFixed(2)}
      </strong>

      <Link
        to={`/dashboard/orders/${order.id}`}
        className={styles.link}
      >
        View Details →
      </Link>
    </div>
  );
}

export default OrderCard;