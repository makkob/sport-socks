  'use client'
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  import React, { useState } from "react";
  import styles from "./PriceEnd.module.css";
  import { sendTelegram } from "./ContactForm";

  export default function PriceEnd() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Name: ", name);
      console.log("Phone: ", phone);
    
      // Google Form URL
      const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKbTZEkPdhqGhujS4KzF0qkGHNXpoqvNzh4EWIZ5-Yq2tUVQ/formResponse";
    
      // Entry IDs of the form fields
      const ENTRY_ID_FOR_NAME = "entry.2129246310";
      const ENTRY_ID_FOR_PHONE = "entry.1442003560";
    
      // Create a FormData object
      let formData = new FormData();
      formData.append(ENTRY_ID_FOR_NAME, name);
      formData.append(ENTRY_ID_FOR_PHONE, phone);
    
      // Send a POST request to the Google Form
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // 'cors' if the server supports it
      });
    
      toast.success("Ми зв'яжемося з вами найближчим часом");
    };
    
    return (
      <>
        <div className={styles.container}>
          <div className={styles.sale}>Акція!</div>
          <strong className={styles.priceMain}>
            600 <span className={styles.priceMainText}>грн</span>
          </strong>
          <s className={styles.oldPrice}>
            750 <span>грн</span>
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
        <p className={styles.text}>Доставка Новою Поштою протягом 1-2 робочих днів. Вартість доставки товару від 50 грн. Доставка Укр.Поштою протягом 2-4 днів, ціна від 28грн. Оплата замовлень здійснюється за реквізитами або по факту отримання(наложенним платежем).</p>
      </>
    );
  }
