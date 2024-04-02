"use client";

import React, { useState, useEffect } from "react";

import styles from "./page.sass";
import Layout from "@/components/Layout/Layout";
import Contacts from "@/components/Contacts/Contacts";
import Products from "@/components/Products/Products";

export default function Home() {
  const [isPC, setIsPC] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsPC(window.innerWidth > 900);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <main>
      <Layout isPC={isPC}>
      {/* <Layout> */}
        <Products></Products>
        <Contacts />
      </Layout>
    </main>
  );
}
