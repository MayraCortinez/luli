import React from 'react'
import styles from '../styles/components/textbanner.module.css';


const TextBanner = () => {
  return (
    <section className={styles.body}>
          <div className={styles.title}> Restaurante de campo en Gorostiaga</div>
          <h2 className={styles.subtitle}> Siente la calma del campo, mientras disfrutas 
            de cada bocado.  </h2>
          <h4 className={styles.subtitle}> Viernes y sábados cena show. Domingos almuerzo campestre.</h4>
    </section>
  )
}

export default TextBanner;