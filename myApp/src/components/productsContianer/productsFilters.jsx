import styles from "./productsContianer.module.css";
const ProductFilters = ({ filter, setFilter }) => {
  const onFilter = (value) => {
    setFilter(value);
  };
  return (
    <div className={styles.productsFilter}>
      <h3 className={styles.productsFilterHeading}>Filters</h3>

      <FilterItem
        selected={filter}
        onFilter={onFilter}
        label={"All"}
        value={"all"}
      />
      <FilterItem
        selected={filter}
        onFilter={onFilter}
        label={"Men's Clothing"}
        value={"men's clothing"}
      />
      <FilterItem
        selected={filter}
        onFilter={onFilter}
        label={"Women's Clothing"}
        value={"women's clothing"}
      />
      <FilterItem
        selected={filter}
        onFilter={onFilter}
        label={"Electronics"}
        value={"electronics"}
      />
      <FilterItem
        selected={filter}
        onFilter={onFilter}
        label={"Jewelery"}
        value={"jewelery"}
      />
    </div>
  );
};

const FilterItem = ({ label, selected, onFilter, value }) => {
  const isCurrSelected = selected === value;
  return (
    <button
      className={`${styles.filterItem} ${
        isCurrSelected ? styles.selectedFilter : ""
      }`}
      onClick={() => onFilter(value)}
    >
      {label}
    </button>
  );
};

export default ProductFilters;
