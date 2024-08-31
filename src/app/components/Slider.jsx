import React from 'react';
import styles from '../styles/components/slider.module.css'; 

const Slider = () => {
  return (
    <div className="slider">
      <div className={styles.slides}>
        <div className={styles.slide}><img src="img1.jpg" alt="Image 1" /></div>
        <div className={styles.slide}><img src="img2.jpg" alt="Image 2" /></div>
        <div className={styles.slide}><img src="img3.jpg" alt="Image 3" /></div>
        <div className={styles.slide}><img src="img4.jpg" alt="Image 4" /></div>
      </div>
      <div className={styles.sliderText}>
        <h1> Restaurante de Campo</h1>
        <h2> Disfruta del mejor entorno y gastronomía </h2>
        <button className={styles.buttonReserve}>Reservar</button>
      </div>
    </div>
  );
};

export default Slider;
