import React from "react";
import styles from "./Price.module.css";
export default function Price() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sale}>Акція!</div>
        <strong className={styles.priceMain}>
          250 <span className={styles.priceMainText}>грн</span>
        </strong>
        <s className={styles.oldPrice}>
          350 <span>грн</span>
        </s>
      </div>
      <div className={styles.redLine}></div>
      <button className={styles.button}> ЗАМОВИТИ</button>
    </>
  );
}
