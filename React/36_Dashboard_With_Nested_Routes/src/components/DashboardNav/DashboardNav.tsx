import { NavLink } from "react-router";
import styles from "./DashboardNav.module.css";

function getNavLinkClasses({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function DashboardNav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.label}>MAIN MENU</p>

      <NavLink to="/dashboard" end className={getNavLinkClasses}>
        <span className={styles.icon}>⌂</span>
        <span>Home</span>
      </NavLink>

      <NavLink to="/dashboard/profile" className={getNavLinkClasses}>
        <span className={styles.icon}>◉</span>
        <span>Profile</span>
      </NavLink>

      <NavLink to="/dashboard/orders" className={getNavLinkClasses}>
        <span className={styles.icon}>▣</span>
        <span>Orders</span>
      </NavLink>

      <NavLink to="/dashboard/settings" className={getNavLinkClasses}>
        <span className={styles.icon}>⚙</span>
        <span>Settings</span>
      </NavLink>
    </nav>
  );
}

export default DashboardNav;
