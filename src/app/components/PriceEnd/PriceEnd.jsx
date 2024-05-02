"use client";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Добавлен useEffect
import styles from "./PriceEnd.module.css";

export default function PriceEnd() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pair, setPair] = useState("1 пара");
  // const [pixelLoaded, setPixelLoaded] = useState(false);

  // useEffect(() => {
  //   // Функция, которая будет вызвана, когда Pixel загрузится
  //   function pixelLoadHandler() {
  //     setPixelLoaded(true);
  //   }

  //   // Добавление слушателя события загрузки к тегу script, если он существует
  //   const fbScript = document.querySelector('script[src="https://connect.facebook.net/en_US/fbevents.js"]');
  //   if (fbScript) {
  //     fbScript.addEventListener('load', pixelLoadHandler);
  //   } else {
  //     // Если скрипт не найден, мы устанавливаем pixelLoaded в true, так как скрипт уже загружен ранее
  //     setPixelLoaded(true);
  //   }

  //   return () => {
  //     // Удаление слушателя события загрузки при размонтировании компонента
  //     if (fbScript) {
  //       fbScript.removeEventListener('load', pixelLoadHandler);
  //     }
  //   };
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Phone: ", phone);
    console.log("Pair: ", pair);
    
    // Проверка загрузки Facebook Pixel перед отслеживанием события
    // if (window.fbq && pixelLoaded) {
    if (window.fbq) {
      // console.log("/////////////window.fbq: ", window.fbq);
      window.fbq('track', 'SubmitForm');

    } else {
      console.error('Facebook Pixel not loaded yet.');
    }

    // ... остальной код функции handleSubmit

     // Google Form URL
    // Никита
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKbTZEkPdhqGhujS4KzF0qkGHNXpoqvNzh4EWIZ5-Yq2tUVQ/formResponse";
    // Entry IDs of the form fields
    const ENTRY_ID_FOR_NAME = "entry.1020130990";
    const ENTRY_ID_FOR_PHONE = "entry.1088637230";
    const ENTRY_ID_FOR_PAIR = "entry.323088466";

    //Миша
    // const GOOGLE_FORM_ACTION_URL =
    //   "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcrtv9btrsfwCg6h9l_UBjhXSqbpfZPXHWFNS9_ocRoUA99g/formResponse";
    // const ENTRY_ID_FOR_NAME = "entry.2071186125";
    // const ENTRY_ID_FOR_PHONE = "entry.508270167";
    // const ENTRY_ID_FOR_PAIR = "entry.365889611";
    // Create a FormData object
    let formData = new FormData();
    formData.append(ENTRY_ID_FOR_NAME, name);
    formData.append(ENTRY_ID_FOR_PHONE, phone);
    formData.append(ENTRY_ID_FOR_PAIR, pair);

    // Send a POST request to the Google Form
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors", // 'cors' if the server supports it
    });
    console.log(formData);
    toast.success("Ми зв'яжемося з вами найближчим часом");
  };

  // ... JSX код компонента
  return (
    <>
      <div className={styles.container} id="price-end">
        <div className={styles.sale}>Акція!</div>
        <strong className={styles.priceMain}>
          <span className={styles.pair}>1 пара </span> 180
          <span className={styles.priceMainText}>грн</span>
        </strong>
        <s className={styles.oldPrice}>
          350 <span>грн</span>
        </s>
      </div>
      <div className={styles.redLine}></div>

      <div className={styles.container}>
        <div className={styles.sale}>Акція!</div>
        <strong className={styles.priceMain}>
          <span className={styles.pair}>2 пари </span>299
          <span className={styles.priceMainText}>грн</span>
        </strong>
        <s className={styles.oldPrice}>
          460 <span>грн</span>
        </s>
      </div>
      <div className={styles.redLine}></div>

      <div className={styles.container}>
        <div className={styles.sale}>Акція!</div>
        <strong className={styles.priceMain}>
          <span className={styles.pair}>3 пари </span>399
          <span className={styles.priceMainText}>грн</span>
        </strong>
        <s className={styles.oldPrice}>
          690 <span>грн</span>
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
        <select
          className={styles.inputField}
          onChange={(e) => setPair(e.target.value)}
          value={pair}
        >
          <option value="1 пара" >1 пара</option>
          <option value="2 пари">2 пари</option>
          <option value="3 пари">3 пари</option>
        </select>
        <button type="submit" className={styles.button}>
          {" "}
          ЗАМОВИТИ
        </button>
      </form>
      <p className={styles.text}>
        Доставка Новою Поштою протягом 1-2 робочих днів. Вартість доставки
        товару від 50 грн. Доставка Укр.Поштою протягом 2-4 днів, ціна від
        28грн. Оплата замовлень здійснюється за реквізитами або по факту
        отримання (післяплата).
      </p>

      <div className={styles.imageContainer}>
        <Image
          src="/images/photo_2024-04-13_19-32-09.jpg"
          fill
          objectFit="cover"
          alt="Description of image"
        />
      </div>

      <h1 className={styles.textEnd}>
        Отримуй задоволення від тренувань з комфортом
      </h1>
    </>
  );
}
