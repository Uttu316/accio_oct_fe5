import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // let x=0;
  const [x, setX] = useState(0);

  const onAdd = () => {
    // x = x + 1;
    setX(x + 1); //async

    // const el = document.getElementById("count_text");
    // el.innerHTML = x;
    console.log(x);
  };
  const onMinus = () => {
    // x = x - 1;

    setX((currX) => currX - 1);
    // const el = document.getElementById("count_text");
    // el.innerHTML = x;
    console.log(x);
  };

  console.log("Cunter called and x updated ", x);
  return (
    <div className={styles.counter}>
      <h2 className={styles.count}>{x}</h2>

      <div className={styles.counterActions}>
        <button onClick={onAdd} className={styles.addBtn}>
          Add
        </button>
        <button onClick={onMinus} className={styles.minusBtn}>
          Minus
        </button>
      </div>
    </div>
  );
};

export default Counter;
