import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Спортивні шкарпетки",
  description:
    "Спортивні високі шкарпетки Трусокс забезпечують додаткову стабілізацію завдяки силіконовим подушечкам, що покривають всю підошву. Ці силіконові подушечки розміщені так, щоб покривати всю підошву, а зверху є сіточка, щоб ноги могли дихати. Завдяки силіконовим вставкам шкарпетки не дозволяють нозі рухатися всередині спортивного взуття. Ви можете носити такі шкарпетки як для звичайного бігу або тренувань у спортзалі, так і для занять різними видами спорту, такими як футбол, баскетбол, бокс та інші.",
  price: "250 грн",
  size: "39-45",
  season: "Демісезонний, Літній",
  color: "Білий, Жовтий",
  style: "Спортивний",
  material: "Бавовна",
  features: "З широкою гумкою, Трекінгові",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
