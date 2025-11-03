import { Link, NavLink } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const AppHeader = () => {
  //step 3
  const { cartSize } = useContext(CartContext);
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <nav className={styles.navBar}>
        <NavItem label={"About"} to="/about" />
        <NavItem label={"Products"} to="/products" />
        <NavItem label={"Cart"} count={cartSize} to="/cart" />
        <NavItem label={"Practice"} to="/practice" />
        <NavItem label={"Contact Us"} to="/contact" />
      </nav>
    </header>
  );
};

const NavItem = ({ label, to, count }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.text}  ${isActive ? styles.active : ""}`
      }
      to={to}
    >
      {label}
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </NavLink>
  );
};

export default AppHeader;
