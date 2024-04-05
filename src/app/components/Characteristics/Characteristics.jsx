import React from "react";
import Image from "next/image";
import SaleTimer from "../SaleTimer/SaleTimer";
import styles from "./Characteristics.module.css";
import {
  faTshirt,
  faCalendarAlt,
  faPalette,
  faShoePrints,
  faCottonBureau,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CottonIcon from "../../components/Icons/Cotton/Cotton";

export default function DescriptionOne() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Характеристики</h3>
      <div className={styles.imageContainer}>
        <Image
          src="/images/characteristics2.jpg" // Route of the image file
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="Description of image"
        />
      </div>

      <div className={styles.grid}>
        <span className={styles.characteristicName}> Розміри:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            {" "}
            <FontAwesomeIcon icon={faTshirt} height={14} />
            {" "} 39-45
          </span>
        </div>
        <span className={styles.characteristicName}> Сезон:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            {" "}
            <FontAwesomeIcon icon={faCalendarAlt} height={14} />
            {" "} Демісезонний
          </span>
        </div>
        <span className={styles.characteristicName}> Колір:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            <FontAwesomeIcon icon={faPalette} height={14} /> Білий, Жовтий
          </span>
        </div>
        <span className={styles.characteristicName}> Стиль:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            <FontAwesomeIcon icon={faFutbol} height={14} />
            {" "} Спортивний
          </span>
        </div>
        <span className={styles.characteristicName}>Матеріал:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            <CottonIcon /> Бавовна
          </span>
        </div>
        <span className={styles.characteristicName}>Особливості:</span>{" "}
        <div className={styles.rectangle}>
          <span className={styles.characteristicDescription}>
            Трекінгові, широка гумка
          </span>
        </div>
      </div>
    </div>
  );
}
