import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function getActiveLink({
  isActive,
}: {
  isActive: boolean;
}) {
  return isActive
    ? `${styles.link} ${styles.active}`
    : styles.link;
}

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={getActiveLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        end
        className={getActiveLink}
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;