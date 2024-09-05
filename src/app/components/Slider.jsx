'use client';

import React, {useState} from 'react';
import styles from '../styles/components/slider.module.css'; 
import ReservationModal from './ReservationModal';

const Slider = () => {

  // Definir el estado que controlará si el modal está abierto o cerrado
  const [isModalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal (esto será `onClose`)
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  
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
        <button className={styles.buttonReserve} onClick={handleOpenModal}>Reservar</button>
      </div>
        {/* Pasamos `isOpen` y `onClose` como props al componente del modal */}
        <ReservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Slider;
