import { useState } from "react";
import styles from "./stopwatch.module.css";
import Timer from "./timer";

const StopWatch = () => {
  const [isTimer, setIsTimer] = useState(false);

  const toggleTimer = () => {
    setIsTimer(!isTimer);
  };
  return (
    <div className={styles.stopWatchWrapper}>
      <button className={styles.toggleButton} onClick={toggleTimer}>
        {!isTimer ? "Show Timer" : "Hide Timer"}
      </button>
      {isTimer && <Timer />}
    </div>
  );
};

export default StopWatch;
