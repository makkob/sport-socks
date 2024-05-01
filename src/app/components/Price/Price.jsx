'use client'
import React from "react";
import styles from "./Price.module.css";
export default function Price() {
  const handleClick = () => {
    const element = document.getElementById("price-end");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sale}>Акція!</div>
        <strong className={styles.priceMain}>
          180 <span className={styles.priceMainText}>грн</span>
        </strong>
        <s className={styles.oldPrice}>
          350 <span>грн</span>
        </s>
      </div>
      <div className={styles.redLine}></div>
      <button className={styles.button} onClick={handleClick}> ЗАМОВИТИ</button>
    </>
  );
}
