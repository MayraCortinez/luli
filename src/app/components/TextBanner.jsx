import React from 'react'
import styles from '../styles/components/textbanner.module.css';


const TextBanner = () => {
  return (
    <section className={styles.body}>
          <h2 className={styles.subtitle}> ENCANTO RURAL <br />
          "Cada detalle te acerca a la belleza simple y serena de la vida en el campo." </h2>
    </section>
  )
}

export default TextBanner;