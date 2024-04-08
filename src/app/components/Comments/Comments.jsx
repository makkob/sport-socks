import React from "react";
import Image from "next/image";
import styles from "./Comments.module.css";

export default function Comments() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Відгуки</h3>
      <div className={styles.imageContainer}>
        <Image
          src="/images/screenshot3.jpg"
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="Description of image"
        />
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
