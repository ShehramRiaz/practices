import { Outlet } from "react-router";
import DashboardNav from "../../../components/DashboardNav/DashboardNav";
import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>D</div>
          <div>
            <h1>Dashboard</h1>
            <span>Management Panel</span>
          </div>
        </div>

        <DashboardNav />

        <div className={styles.sidebarFooter}>
          <div className={styles.avatar}>S</div>
          <div>
            <strong>Shehram</strong>
            <span>Student</span>
          </div>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.breadcrumb}>Dashboard</p>
            <h2>Welcome back, Shehram 👋</h2>
          </div>

          <div className={styles.user}>
            <div className={styles.userAvatar}>S</div>
          </div>
        </header>

        <main className={styles.main}>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default DashboardLayout;
