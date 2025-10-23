import styles from "./header.module.css";

const AppHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src="vite.svg" />
      <nav className={styles.navBar}>
        <a className={styles.text} href="#">
          About
        </a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default AppHeader;
