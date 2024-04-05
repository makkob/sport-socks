import React from "react";
import styles from "./CharacteristicsTwo.module.css"
export default function CharacteristicsTwo() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {" "}
        Склад: 56% бавовна; 34% поліамід; 8% еластан; 2% силіконова зона.
        <br />
        <br />
        Шкарпетки розтягуються та мають універсальний розмір, який підходить для
        ніг розміром від 39 до 44 (24-28 см). Висота від п'ятки становить 15 см.
        Їх можна прати в пральній машині, і вони не потребують особливого
        догляду.
      </p>
    </div>
  );
}
