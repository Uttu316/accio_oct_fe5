import { useContext, useMemo } from "react";
import PageWrapper from "../../components/PageWrapper";
import styles from "./cart.module.css";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  // Dummy data for cart items
  const { cart: cartItems, removeFromCart, cartSize } = useContext(CartContext);

  const isEmpty = cartSize === 0;

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  const discount = 10; // Dummy discount
  const amountAfterDiscount = total - discount;
  const gst = amountAfterDiscount * 0.18; // Dummy GST 18%
  const finalAmount = amountAfterDiscount + gst;

  const onRemoveCart = (product) => {
    removeFromCart(product.id);
  };
  return (
    <PageWrapper>
      <div className={styles.cartContainer}>
        <div className={styles.cartContent}>
          <div className={styles.itemsSection}>
            {isEmpty ? (
              <div className={styles.emptyCart}>
                <h2>Your cart is empty</h2>
                <p>Add some items to your cart to see them here.</p>
              </div>
            ) : (
              <div className={styles.itemsList}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.itemCard}>
                    <div className={styles.itemImage}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDescription}>
                        {item.description}
                      </p>
                      <p className={styles.itemPrice}>${item.price}</p>
                    </div>
                    <div className={styles.itemActions}>
                      <button
                        onClick={() => onRemoveCart(item)}
                        className={styles.removeButton}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {!isEmpty && (
            <div className={styles.summarySection}>
              <h3>Cart Summary</h3>
              <div className={styles.summaryDetails}>
                <div className={styles.summaryRow}>
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Discount:</span>
                  <span>-${discount}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Amount after discount:</span>
                  <span>${amountAfterDiscount}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>GST:</span>
                  <span>${gst.toFixed(2)}</span>
                </div>
                <hr />
                <div className={styles.summaryRow}>
                  <span>Final Amount:</span>
                  <span>${finalAmount.toFixed(2)}</span>
                </div>
              </div>
              <button className={styles.buyNowButton}>Buy Now</button>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Cart;
