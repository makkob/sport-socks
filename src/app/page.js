import Image from "next/image";
import styles from "./page.module.css";
import FirstSlide from "./components/FirstSlide/FirstSlide"
import Price from "./components/Price/Price"
import DescriptionOne from "./components/DescriptionOne/DescriptionOne";
import DescriptionTwo from "./components/DescriptionTwo/DescriptionTwo";
import Characteristics from "./components/Characteristics/Characteristics";
import CharacteristicsTwo from "./components/CharacteristicsTwo/CharacteristicsTwo";
import Comments from "./components/Comments/Comments";
import PriceEnd from "./components/PriceEnd/PriceEnd";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (<>

    <main className={styles.main}>
    <FirstSlide
          title="Спортивні тренувальні шкарпетки"
          imgSrc="/images/photo_2024-04-13_16-26-40.jpg"
          qualityGuarantee="Гарантія якості"
          ecoFriendly="Екологічність"
          limitedOffer="Лімітована пропозиція"
        />
     <Price/>
     <DescriptionOne />
     <DescriptionTwo />
     <Characteristics />
     <CharacteristicsTwo />
     <Comments />
     <FirstSlide
          title="Шкарпетки спортивні"
          // subtitle="З високоякісної бавовни"
          imgSrc="/images/photo_2024-04-13_17-51-12.jpg"
          qualityGuarantee="Нова гарантія"
          ecoFriendly="Більш екологічні"
          limitedOffer="Нова пропозиція"
        />
     <PriceEnd/>
     <ToastContainer />

    </main></>
  );
}
