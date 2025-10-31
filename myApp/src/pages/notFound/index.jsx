import AppHeader from "../../components/header";
import notFoundLogo from "../../assets/404.svg";
import { Link } from "react-router";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div>
      <AppHeader />
      <div className={styles.notFoundPage}>
        <h1 className={styles.notFoundTitle}>404 - Page Not Found</h1>
        <img
          src={notFoundLogo}
          alt="404 Not Found"
          className={styles.notFoundImage}
        />
        <div className={styles.notFoundLinks}>
          <Link to="/" className={styles.notFoundLink}>
            Go to Home
          </Link>
          <Link
            to="/products"
            className={`${styles.notFoundLink} ${styles.secondary}`}
          >
            Checkout Products
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
