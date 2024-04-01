// import React from 'react'
// import productsData from '../../data/data.json';
// import CardProduct from '../CardProduct/CardProducr'
// import styles from './Product.sass'

// export default function Products() {
//   return (
//     <div className={styles.cardsContainer} 

//     style={{
//       display:"grid",
//     //  gridTemplateColumns:"1fr 1fr 1fr"
//   }}
//     >
//       {productsData.map(product => (
//         <CardProduct key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

import React from 'react'
import productsData from '../../data/data.json';
import CardProduct from '../CardProduct/CardProducr'
import styles from './Product.sass'
import { useMediaQuery } from 'react-responsive'

export default function Products() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div className={styles.cardsContainer} 
      style={{
        display: isDesktopOrLaptop ? "flex" : "grid",
        flexDirection: isDesktopOrLaptop ? "row" : "column"
      }}
    >
      {productsData.map(product => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
