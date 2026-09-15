import { Link, useParams } from "react-router";
import { orders } from "../../../data/orders";
import styles from "./OrderDetails.module.css";

function OrderDetails() {
  const { orderId } = useParams();

  const order = orders.find((order) => order.id === Number(orderId));

  if (!order) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>?</div>

        <h1>No Such Order Found</h1>

        <p>
          No order exists with ID <strong>#{orderId}</strong>.
        </p>

        <Link to="/dashboard/orders" className={styles.backButton}>
          ← Back to Orders
        </Link>
      </div>
    );
  }

  const statusClass =
    order.status.toLowerCase() === "completed"
      ? styles.completed
      : order.status.toLowerCase() === "pending"
        ? styles.pending
        : styles.processing;

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div>
          <Link to="/dashboard/orders" className={styles.backLink}>
            ← Back to Orders
          </Link>

          <h1>Order #{order.id}</h1>
          <p>Order details and information.</p>
        </div>

        <span className={`${styles.status} ${statusClass}`}>
          {order.status}
        </span>
      </div>

      <section className={styles.card}>
        <div className={styles.productHeader}>
          <div className={styles.productIcon}>▣</div>

          <div>
            <span>Product</span>
            <h2>{order.product}</h2>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <span>Order ID</span>
            <strong>#{order.id}</strong>
          </div>

          <div>
            <span>Product</span>
            <strong>{order.product}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{order.status}</strong>
          </div>

          <div>
            <span>Total Amount</span>
            <strong>${order.total.toFixed(2)}</strong>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <h2>Order Timeline</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div>
              <strong>Order placed</strong>
              <span>Your order has been received.</span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div>
              <strong>Order processing</strong>
              <span>Your order is being processed.</span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div>
              <strong>{order.status}</strong>
              <span>The current order status.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderDetails;
