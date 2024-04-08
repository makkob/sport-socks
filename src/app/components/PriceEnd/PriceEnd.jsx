  'use client'
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  import React, { useState } from "react";
  import styles from "./PriceEnd.module.css";
  import { sendTelegram } from "./ContactForm";

  export default function PriceEnd() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Name: ", name);
      console.log("Phone: ", phone);
      sendTelegram(name, phone);
      toast.success("Ми зв'яжемося з вами найближчим часом");
    };
    
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
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="text"
            placeholder="Ваше ім’я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.inputField}
          />
          <button type="submit" className={styles.button}> ЗАМОВИТИ</button>
        </form>
        <p className={styles.text}>Доставка Новою Поштою протягом 1-3 робочих днів. Вартість доставки товару від 45 грн. Оплата замовлень здійснюється тільки за фактом отримання товару в поштовому відділенні. Ми завжди перевіряємо товар перед відправкою.</p>
      </>
    );
  }
