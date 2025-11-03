import { useParams } from "react-router";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../../services";
import styles from "./product.module.css";
import PageWrapper from "../../components/PageWrapper";
import { CartContext } from "../../contexts/CartContext";

const ProductPage = () => {
  const { productId } = useParams(); // parsing product id from URL

  const { isInCart, addToCart, removeFromCart, cart } = useContext(CartContext);

  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const noProduct = isDone && product === null;
  const hasProduct = isDone && product !== null;

  const getProduct = useCallback(async () => {
    try {
      const data = await api({
        endpoint: `/products/${productId}`,
      });

      setStatus("done");
      setProduct(data);
    } catch (e) {
      setStatus("error");
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const renderStars = useCallback((rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      );
    }
    return stars;
  }, []);

  const onAddToCart = () => {
    addToCart(product);
  };

  const onRemoveCart = () => {
    removeFromCart(product.id);
  };
  const inCart = useMemo(() => {
    if (!product) return false;
    return isInCart(product.id);
  }, [cart, product]);

  return (
    <PageWrapper>
      <div className={styles.productPage}>
        {isLoading && (
          <div className={styles.loading}>Loading product details...</div>
        )}

        {isError && (
          <div className={styles.error}>
            Error loading product. Please try again.
          </div>
        )}

        {noProduct && (
          <div className={styles.noProduct}>Product not found.</div>
        )}

        {hasProduct && (
          <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
            </div>

            <div className={styles.productDetails}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productCategory}>{product.category}</p>
              <p className={styles.productPrice}>${product.price}</p>
              <div className={styles.productRating}>
                <div className={styles.ratingStars}>
                  {renderStars(Math.floor(product.rating.rate))}
                </div>
                <span className={styles.ratingValue}>
                  {product.rating.rate}
                </span>
                <span className={styles.reviewsCount}>
                  ({product.rating.count} reviews)
                </span>
              </div>
              <div className={styles.ctaButtons}>
                {!inCart && (
                  <button onClick={onAddToCart} className={styles.addToCartBtn}>
                    Add to Cart
                  </button>
                )}
                {inCart && (
                  <button
                    onClick={onRemoveCart}
                    className={styles.removeFromCartBtn}
                  >
                    Remove from Cart
                  </button>
                )}
                <button className={styles.buyNowBtn}>Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};
export default ProductPage;
