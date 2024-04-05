import React from 'react'
import Image from 'next/image'
import styles from "./Comments.module.css"

export default function Comments() {
  return (
    <div className={styles.container}>
    <h3 className={styles.title}>Відгуки</h3>
    <div className={styles.imageContainer}>
      <Image
        src="/images/screenshot_1.png" // Route of the image file
        layout="fill"
        style={{ objectFit: "cover" }}
        alt="Description of image"
      />
    </div>
    <div className={styles.imageContainer2}>
      <Image
        src="/images/screenshot_2.png" // Route of the image file
        layout="fill"
        style={{ objectFit: "cover" }}
        alt="Description of image"
      />
    </div>
    <div className={styles.space}></div>
  </div>
  )
}
