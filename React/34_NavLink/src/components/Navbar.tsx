import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

function getActiveLink({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getActiveLink}>
        Home
      </NavLink>

      <NavLink to="/about" className={getActiveLink}>
        About
      </NavLink>

      <NavLink to="/contact" className={getActiveLink}>
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navbar;
