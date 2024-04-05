'use client'
import React, { useState, useEffect } from "react";
import styles from "./SaleTimer.module.css";

export default function SaleTimer() {
  const calculateTimeLeft = () => {
    let now = new Date();
    // Set the end time as 5 AM next day
    let endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0, 0);
    if (now.getHours() >= 5) {
      endTime.setDate(endTime.getDate() + 1);
    }
    let difference = endTime - now;

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h4 className={styles.title}>Акція діє:</h4>
      <div className={styles.grid}>
        <div className={styles.square}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.text}>годин</span>
        </div>
        <div className={styles.square}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.text}>хвилин</span>
        </div>
        <div className={styles.square}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.text}>секунд</span>
        </div>
      </div>
    </div>
  );
}
