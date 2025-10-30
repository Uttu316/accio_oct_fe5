import ProductItem from "./productItem";
import styles from "./productsContianer.module.css";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.productsList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
