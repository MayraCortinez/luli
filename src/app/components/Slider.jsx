'use client';

import React, { useState } from 'react';
import ReservationModal from './ReservationModal';
import Button from '@mui/material/Button';

import styles from '../styles/components/slider.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Autoplay, Parallax } from 'swiper/modules';

const Slider = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Swiper
      spaceBetween={30}
      effect="fade"
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      parallax={true}
      modules={[EffectFade, Autoplay, Parallax]}
      className={styles.mySwiper}
    >
      <SwiperSlide>
        <img
          src="img1.jpg"
          alt="Image 1"
          className="w-full h-[100vh] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="img2.jpg"
          alt="Image 2"
          className="w-full h-[100vh] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="img3.jpg"
          alt="Image 3"
          className="w-full h-[100vh] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="img4.jpg"
          alt="Image 4"
          className="w-full h-[100vh] object-cover"
        />
      </SwiperSlide>

      {/* Texto y botón sobre el slider */}
      <div className="absolute top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 
      animate-fade-up animate-once">
        <h1 className="text-2xl sm:text-4xl font-bold">Restaurante de Campo</h1>
        <h2 className="text-lg sm:text-2xl mt-2 mb-4">
          Disfruta del mejor entorno y gastronomía
        </h2>
        <Button className={styles.buttonReserve} variant="contained" color="primary" onClick={handleOpenModal}>
          Reservar
        </Button>
      </div>

      {/* Modal para la reserva */}
      <ReservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Swiper>
    </>
  );
};

export default Slider;

