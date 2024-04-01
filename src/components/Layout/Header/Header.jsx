"use client";

import React, { useState, useEffect } from "react";
import {
 
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  Container,
} from "@mui/material";
import _throttle from "lodash/throttle";
import Image from "next/image";

import Logo from "./img/NEON_HOLOS_PATH.svg";
import MenuIcon from "@mui/icons-material/Menu";
import LogoPng from "./img/logo-no-bg.png";
import TelegramIcon from "@mui/icons-material/Telegram";

import styles from "./Header.sass";

const Header = ({scrollPosition}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const buttonStyles = {
  //   fontSize: 22,
  //   fontWeight:600,
  //   fontFamily: "var(--font-montserrat)",
  //   textTransform: 'none'
  // };

  const phoneButtonStyles = {
    // fontSize: { xs: "1.2rem", md: "1.2rem", lg: "1.2rem" },
    fontFamily: "var(--font-montserrat)",
  };

  const drawerPaperStyles = {
    backgroundColor: "#151314",
    color: "#f0beff",
    // textShadow: "1px 1px 0px #f61aba",
    fontFamily: "var(--font-montserrat)",
  };

  const drawerButtonStyles = {
    display: "block",
    textAlign: "left",
    color: "inherit",
    fontFamily: "var(--font-montserrat)",
  };

  const iconStyle = {
    color: "#f0beff",
    // textShadow: "1px 1px 0px #f61aba",
  };

  return (

    <AppBar
      // style={{
      //   fontFamily: "var(--font-montserrat)",
      //   backgroundColor: "rgba(0,0,0,0)",
      //   ion: "fixed", 
      //   top: 0,
      //   width: "100%",
      //   boxShadow:"none",
      //   zIndex: 1100,
      // }}
      className={scrollPosition>200 ? styles.headerSlideIn : "" }
      id="header"
    >
      <Container maxWidth="md">
        <div className={styles.renderIfPC}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Button disableRipple href="#welcome">
              <Image
                src={LogoPng}
                alt="Neon Holos Logo"
                height={40}
                width={54}
              /> 
             </Button>

            <Button color="inherit" href="#welcome"  className="buttonStyles">
              Головна
            </Button>
            <Button color="inherit" href="#about-us"  className="buttonStyles">
              Про нас
            </Button>
            <Button color="inherit" href="#price"  className="buttonStyles">
              Товари
            </Button>
            <Button color="inherit" href="#contacts"  className="buttonStyles">
              Контакти
            </Button>
            {/* <Button
              color="inherit"
              href="https://t.me/golos_vocal"
              style={buttonStyles}
            >
              <TelegramIcon />
              @golos_vocal
            </Button> */}
          </Toolbar>
        </div>
        <div className={styles.renderIfPhone}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            {/* <Button disableRipple href="#welcome">
              <Image
                src={LogoPng}
                alt="Neon Holos Logo"
                height={40}
                width={54}
              />
            </Button> */}
            {/* <Button
              color="inherit"
              href="https://t.me/golos_vocal"
              style={phoneButtonStyles}
            >
              <TelegramIcon />
              @golos_vocal
            </Button> */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            PaperProps={{ style: drawerPaperStyles }}
          >
            <Button
              href="#welcome"
              className="buttonStyles"
              onClick={toggleDrawer}
            >
              Головна
            </Button>
            <Button
              href="#about-us"
              className="buttonStyles"
              onClick={toggleDrawer}
            >
              Про нас
            </Button>
            <Button
              href="#price"
              className="buttonStyles"
              onClick={toggleDrawer}
            >
              Ціни
            </Button>
            <Button
              href="#contacts"
              className="buttonStyles"
              onClick={toggleDrawer}
            >
              Контакти
            </Button>
            {/* <Button href="https://t.me/golos_vocal" style={drawerButtonStyles}>
              <IconButton style={iconStyle}>
                <TelegramIcon fontSize="md" /> 
              </IconButton>@golos_vocal
            </Button> */}
          </Drawer>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
