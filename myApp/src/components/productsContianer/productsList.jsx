import { memo, useMemo } from "react";
import ProductItem from "./productItem";
import styles from "./productsContianer.module.css";

const ProductsList = ({ products, filter }) => {
  console.log("Product List Render");
  const filteredArray = useMemo(() => {
    console.log("Filtering List");
    return filter === "all"
      ? products
      : products.filter((i) => i.category === filter);
  }, [products, filter]);

  return (
    <div className={styles.productsList}>
      {filteredArray.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default memo(ProductsList);
