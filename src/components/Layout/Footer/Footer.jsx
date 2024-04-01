import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from '@mui/icons-material/Telegram';
import Image from "next/image";

import Logo from "./img/Logo small2.png";
import styles from "./Footer.sass";
import { IconButton } from "@mui/material";

export default function Footer() {

  const iconStyle = {
    color: "#f0beff",
    textShadow: "0px 0px 0px #f61aba",
  };

  return (
    <footer className={styles.container}  id="footer"     fontFamily='var(--font-montserrat)'
    >
      <Image
        src={Logo}
        alt="Neon Holos Logo"
        loading="lazy"
        width={200}
        height={40}
      />
      <div >All rights reserved ©</div>
      <div>
      <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <InstagramIcon />
          </IconButton>
{/*      
          <IconButton
            href="https://www.facebook.com/people/%D0%92%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0-%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F-%D0%93%D0%BE%D0%BB%D0%BE%D1%81/pfbid02Nub6oczBCDRPiQTNR5LDxeoC5FKkRVS9jsgGg8sKYkYgkaWPuLVYoBoFp84jospql/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FacebookIcon />
          </IconButton> */}
        
          <IconButton
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <TelegramIcon/>
          </IconButton>
      </div>
    </footer>
  );
}
