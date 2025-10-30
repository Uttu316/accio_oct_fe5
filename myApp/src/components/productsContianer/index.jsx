import { useEffect, useState } from "react";
import styles from "./productsContianer.module.css";
import { api } from "../../services";
import ProductFilters from "./productsFilters";
import ProductsList from "./productsList";

const ProductsContianer = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  const [filter, setFilter] = useState("");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const noProducts = isDone && products.length === 0;
  const hasProducts = isDone && products.length !== 0;

  const getProducts = async () => {
    try {
      const data = await api({
        endpoint: "/products",
      });

      setProducts(data);
      setStatus("done");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.productsContianer}>
      {isLoading && <h2 className={styles.laoder}>Loading...</h2>}

      {isError && <h2 className={styles.error}>Something Went Wrong</h2>}

      {noProducts && <h2 className={styles.error}>No Product Available</h2>}

      {hasProducts && (
        <>
          <ProductFilters filter={filter} setFilter={setFilter} />
          <ProductsList products={products} />
        </>
      )}
    </div>
  );
};
export default ProductsContianer;
