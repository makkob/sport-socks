import React from "react";
import Image from "next/image";
import styles from "./DescriptionOne.module.css";
import SaleTimer from "../SaleTimer/SaleTimer";

export default function DescriptionOne() {
  return (
    <div className={styles.container}>
      <SaleTimer />

      <h3 className={styles.title}>Комфорт при кожному кроці</h3>
      <div className={styles.imageContainer}>
        <Image
          src="/images/second1socksBGfootball.jpg" // Route of the image file
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="Description of image"
        />
      </div>
      <p className={styles.text}>
        {" "}
        Спортивні високі шкарпетки Tru Sox забезпечують додаткову стабілізацію
        завдяки силіконовим подушечкам, що покривають всю підошву. Ці силіконові
        подушечки розміщені так, щоб покривати всю підошву, а зверху є сіточка,
        щоб ноги могли дихати.
      </p>
    </div>
  );
}
