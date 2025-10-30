import { useEffect, useState } from "react";
import styles from "./stopwatch.module.css";
let intervalId;
const Timer = () => {
  const [time, setTime] = useState(0);
  const [showLimit, setShowLimit] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startTimer = () => {
    setTime((t) => t + 1);
    intervalId = setInterval(() => {
      console.log("interval runing");
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTime(0);
    setIsPaused(false);
  };

  const onPause = () => {
    clearInterval(intervalId);
    setIsPaused(true);
  };

  const onResume = () => {
    setIsPaused(false);
    intervalId = setInterval(() => {
      console.log("interval runing");
      setTime((t) => t + 1);
    }, 1000);
  };

  useEffect(() => {
    //setup fn
    console.log("Timer mounted");
    startTimer();

    return () => {
      //cleanup fn
      // component unmounting
      console.log("Timer unmounting");
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (time >= 10) {
      setShowLimit(true);
    }
  }, [time]);

  const isRunning = time !== 0;

  return (
    <div className={styles.timerContainer}>
      <h1 className={styles.time}>{time}</h1>

      <div className={styles.actions}>
        {!isRunning && (
          <button className={styles.start} onClick={startTimer}>
            start
          </button>
        )}
        {isRunning && (
          <button className={styles.reset} onClick={stopTimer}>
            Reset
          </button>
        )}
        {isRunning && !isPaused && (
          <button className={styles.pause} onClick={onPause}>
            Pause
          </button>
        )}
        {isRunning && isPaused && (
          <button className={styles.resume} onClick={onResume}>
            Resume
          </button>
        )}
      </div>
      {showLimit && <h2 className={styles.limit}>Limit has reached</h2>}
    </div>
  );
};

export default Timer;
