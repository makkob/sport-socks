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
      <head>
       <link rel="icon" href="/favicon.ico" sizes="any" />
       <meta property="og:image" content="../../public/images/photo_2024-04-13_17-39-41.jpg" />
       <script dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '719905183635297');`
          }} />
       </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
