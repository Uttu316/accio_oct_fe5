import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import PageWrapper from "../../components/PageWrapper";
import ProductsContianer from "../../components/productsContianer";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <PageWrapper className={styles.productPage}>
      <h1 className={styles.productsPageTitle}>Latest Products</h1>
      <ProductsContianer />
    </PageWrapper>
  );
};
export default ProductsPage;
