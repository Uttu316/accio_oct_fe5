import { useNavigate } from "react-router";
import styles from "./productsContianer.module.css";
import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const { addToCart, cart, removeFromCart, isInCart } = useContext(CartContext);

  const onProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const onAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
  const onRemoveCart = (e) => {
    e.stopPropagation();
    removeFromCart(product.id);
  };

  const inCart = useMemo(() => {
    return isInCart(product.id);
  }, [product, cart]);

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
      {!inCart && (
        <button onClick={onAddToCart} className={styles.addToCartBtn}>
          Add to Cart
        </button>
      )}
      {inCart && (
        <button onClick={onRemoveCart} className={styles.removefromCartBtn}>
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
