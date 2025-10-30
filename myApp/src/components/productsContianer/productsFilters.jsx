import styles from "./productsContianer.module.css";
const ProductFilters = ({ filter, setFilter }) => {
  const onFilter = (value) => {
    setFilter(value);
  };
  return (
    <div className={styles.productsFilter}>
      <h3 className={styles.productsFilterHeading}>Filters</h3>

      <FilterItem onFilter={onFilter} label={"All"} value={"all"} />
      <FilterItem
        onFilter={onFilter}
        label={"Men's Clothing"}
        value={"men's clothing"}
      />
      <FilterItem
        onFilter={onFilter}
        label={"Women's Clothing"}
        value={"women's clothing"}
      />
      <FilterItem
        onFilter={onFilter}
        label={"Electronics"}
        value={"electronics"}
      />
      <FilterItem onFilter={onFilter} label={"Jewelery"} value={"jewelery"} />
    </div>
  );
};

const FilterItem = ({ label, onFilter, value }) => {
  return (
    <button className={styles.filterItem} onClick={() => onFilter(value)}>
      {label}
    </button>
  );
};

export default ProductFilters;
