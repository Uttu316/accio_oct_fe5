import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import ProductsContianer from "../../components/productsContianer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.productPage}>
      <AppHeader />
      <h1 className={styles.productsPageTitle}>Latest Products</h1>
      <ProductsContianer />
      <Footer />
    </div>
  );
};
export default ProductsPage;
