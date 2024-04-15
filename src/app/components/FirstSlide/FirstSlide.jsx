import React from "react";
import styles from "./FirstSlide.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faLeaf, faClock } from "@fortawesome/free-solid-svg-icons";

export default function FirstSlide({ title,subtitle, imgSrc, qualityGuarantee, ecoFriendly, limitedOffer }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {/* <h2 className={styles.subtitle}>{subtitle}</h2> */}
      <div className={styles.imageContainer}>
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt="Description of image"
        />
      </div>
      <div className={styles.guarantee}>
        <FontAwesomeIcon icon={faThumbsUp} height={20} />
        <span>{qualityGuarantee}</span>
        <FontAwesomeIcon icon={faLeaf} height={20} />
        <span>{ecoFriendly}</span>
        <FontAwesomeIcon icon={faClock} height={20} />
        <span>{limitedOffer}</span>
      </div>
    </div>
  );
}
