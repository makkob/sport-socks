import React from "react";
import Image from "next/image";
import styles from "./DescriptionTwo.module.css";

export default function DescriptionTwo() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Носи із задоволенням</h3>
      <div className={styles.imageContainer}>
        <Image
          src="/images/NosyZadovolennya.jpg" // Route of the image file
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="Description of image"
        />
      </div>
      <p className={styles.text}>
        {" "}
        Завдяки силіконовим вставкам шкарпетки не дозволяють нозі рухатися
        всередині спортивного взуття. Ви можете носити такі шкарпетки як для
        звичайного бігу або тренувань у спортзалі, так і для занять різними
        видами спорту, такими як футбол, баскетбол, бокс та інші.
      </p>
    </div>
  );
}
