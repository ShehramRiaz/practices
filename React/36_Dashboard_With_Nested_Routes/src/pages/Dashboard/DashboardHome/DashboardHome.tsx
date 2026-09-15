import { Link } from "react-router";
import styles from "./DashboardHome.module.css";

function DashboardHome() {
  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div>
          <h1>Overview</h1>
          <p>Here&apos;s what&apos;s happening with your account.</p>
        </div>

        <Link to="/dashboard/orders" className={styles.button}>
          View Orders
        </Link>
      </div>

      <section className={styles.stats}>
        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.blue}`}>$</div>
          <div>
            <span>Total Revenue</span>
            <strong>$12,580</strong>
            <small>+12.5% this month</small>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.purple}`}>▣</div>
          <div>
            <span>Total Orders</span>
            <strong>128</strong>
            <small>+8.2% this month</small>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>✓</div>
          <div>
            <span>Completed</span>
            <strong>112</strong>
            <small>87.5% completion rate</small>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.icon} ${styles.orange}`}>◷</div>
          <div>
            <span>Pending</span>
            <strong>16</strong>
            <small>Need your attention</small>
          </div>
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2>Recent Activity</h2>
              <p>Your latest account activity</p>
            </div>

            <Link to="/dashboard/orders">View all</Link>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>✓</div>
            <div>
              <strong>Order #1004 completed</strong>
              <span>2 hours ago</span>
            </div>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>+</div>
            <div>
              <strong>New order #1005 received</strong>
              <span>5 hours ago</span>
            </div>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>$</div>
            <div>
              <strong>Payment received</strong>
              <span>Yesterday</span>
            </div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2>Account</h2>
              <p>Your account information</p>
            </div>
          </div>

          <div className={styles.account}>
            <div className={styles.avatar}>S</div>
            <div>
              <strong>Shehram</strong>
              <span>Student</span>
            </div>
          </div>

          <div className={styles.progress}>
            <div className={styles.progressTop}>
              <span>Profile completion</span>
              <strong>80%</strong>
            </div>

            <div className={styles.progressBar}>
              <div />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardHome;
