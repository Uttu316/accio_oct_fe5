import { useNavigate } from "react-router";
import styles from "./productsContianer.module.css";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.productCard} onClick={onProductClick}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productDesc}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
      <button className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
