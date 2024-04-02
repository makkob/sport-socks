

import React from 'react';
import Image from 'next/image'
import { Button } from "@mui/material"
import styles from "./СardProduct.sass";

export default function CardProduct({ product }) {
  return (
    <div
      style={{
        padding: "10px",
        border : "solid 1px white",
        borderRadius : "12px",
        margin: "0px 20px 20px 20px",
        
    
    }}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={320}       
        height={320}
        className="card-image"
        priority
      />
      <div className={styles.cardDetails}>
        <h2 className={styles.cardTitle}>{product.name}</h2>
        <p className={styles.cardDescription}>{product.description}</p>
        <p className={styles.cardPrice}><strong>Ціна:</strong>{product.price} грн</p>
        <div className="card-extra-info">
          <p><strong>Розмір:</strong> {product.size}</p>
          <p><strong>Сезон:</strong> {product.season.join(', ')}</p>
          <p><strong>Колір:</strong> {product.color.join(', ')}</p>
          <p><strong>Стиль:</strong> {product.style}</p>
          <p><strong>Матеріал:</strong> {product.material}</p>
          <p><strong>Особливості:</strong> {product.particularity.join(', ')}</p>
        </div>
        <Button type="submit"
          variant="outlined"
          color="primary"
          style={{
            borderColor: 'white',  // Set the border color to white
            color: 'white',        // Set the text color to white
            fontSize: '16px',      // Adjust the font size as needed
            fontFamily: 'var(--font-montserrat)',
            margin: "8px 0px 0px 0px",
            width: "100%",
          }}>Замовити</Button>
      </div>
    </div>
  );
}
