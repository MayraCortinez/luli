'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState } from 'react';
import ReservationModal from './ReservationModal';


const RestaurantHero = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Campfire Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgFire2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            position: "absolute",
            filter: "brightness(0.7) sepia(20%) hue-rotate(-5deg)"
          }}
        />
      </motion.div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-[#622121]/80" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-4 text-[#FFF5E1] drop-shadow-lg font-serif">
            La Luli
          </h1>
          <p className="text-2xl md:text-3xl text-[#FFE4B5] mb-8 italic">
            Restaurante de Campo
          </p>
          <button className="bg-[#D2691E] text-white font-medium rounded-lg py-6 px-8 b-white text-lg hover:sc" onClick={handleOpenModal}>
          RESERVAR
        </button>


      {/* Modal para la reserva */}
      <ReservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </motion.div>
      </div>

      {/* Decorative overlay for bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[black]/30 to-transparent z-[1]" />
    </section>
  );
};

export default RestaurantHero;
