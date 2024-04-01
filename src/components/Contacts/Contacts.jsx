"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Contacts.sass";
import { Link, Button, Typography, Container } from "@mui/material";
import ContactForm from "./ContactForm/ContactForm";

export default function Contacts() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current && window.VANTA) {
      setVantaEffect(
        window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x000000,
          cloudColor: 0x14455c,
          sunColor: 0x1d4a53,
          sunGlareColor: 0x1d4a53,
          sunlightColor: 0x1d4a53,
          speed: 0.2,
        })
      );
    }
    // console.log('useffect worked')

    // Очистка эффекта при размонтировании компонента
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const iconStyle = {
    color: "#f0beff",
    textShadow: "1px 1px 0px #f61aba",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    textShadow: "none",
    fontFamily: "var(--font-montserrat)",
    fontSize: 24,
    margin: "26px 0px",
  };

  return (
    <>
   
      <div className={styles.container} id="contacts">
        <Container>
          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.column}>
              {/* Phone and Email grid div */}

              <Link target="_blank" href="tel:+380737629097" style={linkStyle}>
                +380734007375
              </Link>

              <Link
                target="_blank"
                href="mailto:ukr.ekoline@gmail.com"
                style={linkStyle}
              >
                {" "}
                ukr.ekoline@gmail.com
              </Link>

              <Link
                target="_blank"
                href="https://maps.app.goo.gl/rzxcjP8cSWYrEt4t5"
                style={linkStyle}
              >
             
              </Link>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
