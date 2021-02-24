import { useEffect, useState } from "react";
import {useChallenges} from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {

  const {startNewChallenge} = useChallenges()

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCounter = () => {
    setIsActive(true);
  };

  const resetCounter = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge()

      console.log("Done");
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              type="button"
              onClick={resetCounter}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              className={styles.countdownButton}
              type="button"
              onClick={startCounter}
            >
              Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};
