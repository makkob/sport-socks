import React from "react";
import styles from "./FirstSlide.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faLeaf, faClock } from "@fortawesome/free-solid-svg-icons";

export default function FirstSlide() {
  return (
    <div className={styles.container}>   
    <h1 className={styles.title}>Шкарпетки спортивні</h1>
    <h2 className={styles.subtitle}>З високоякісної бавовни</h2>
    <div className={styles.imageContainer}>
      <Image
        src="/images/2socks2.jpg" // Route of the image file
        layout="fill"
        objectFit="cover"
        alt="Description of image"
      />
    </div>
    <div className={styles.guarantee}>
      <FontAwesomeIcon icon={faThumbsUp} height={20}/>
      <span>Гарантія якості</span>
      <FontAwesomeIcon icon={faLeaf}  height={20}/>
      <span>Екологічність</span>
      <FontAwesomeIcon icon={faClock} height={20}/>
      <span>Лімітована пропозиція</span>
    </div>
  </div>
  
  );
}
