import { Link, NavLink } from "react-router";
import styles from "./header.module.css";
import logo from "../../assets/react.svg";

const AppHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <nav className={styles.navBar}>
        <NavItem label={"About"} to="/about" />
        <NavItem label={"Products"} to="/products" />
        <NavItem label={"Practice"} to="/practice" />
        <NavItem label={"Contact Us"} to="/contact" />
      </nav>
    </header>
  );
};

const NavItem = ({ label, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.text}  ${isActive ? styles.active : ""}`
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default AppHeader;
