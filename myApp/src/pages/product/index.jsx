import { useParams } from "react-router";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services";
import styles from "./product.module.css";

const ProductPage = () => {
  const { productId } = useParams(); // parsing product id from URL

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

  const renderStars = (rating) => {
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
  };

  return (
    <div>
      <AppHeader />

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
                <button className={styles.addToCartBtn}>Add to Cart</button>
                <button className={styles.buyNowBtn}>Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default ProductPage;
