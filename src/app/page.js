import Image from "next/image";
import styles from "./page.module.css";
import FirstSlide from "./components/FirstSlide/FirstSlide"
import Price from "./components/Price/Price"
import DescriptionOne from "./components/DescriptionOne/DescriptionOne";
import DescriptionTwo from "./components/DescriptionTwo/DescriptionTwo";


export default function Home() {
  return (
    <main className={styles.main}>
     <FirstSlide />
     <Price/>
     <DescriptionOne />
     <DescriptionTwo />
    </main>
  );
}
