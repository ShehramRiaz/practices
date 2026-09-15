import OrderCard from "../../../components/OrderCard/OrderCard";
import { orders } from "../../../data/orders";
import styles from "./Orders.module.css";

function Orders() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div>
          <h1>Orders</h1>
          <p>Track and manage all your orders.</p>
        </div>

        <div className={styles.count}>{orders.length} orders</div>
      </div>

      <section className={styles.card}>
        <div className={styles.tableHeader}>
          <span>Order</span>
          <span>Product</span>
          <span>Status</span>
          <span>Total</span>
          <span />
        </div>

        <div>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Orders;
