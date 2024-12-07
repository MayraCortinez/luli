'use client'

import React from 'react';
import { motion } from 'framer-motion';

const ParallaxSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative h-screen bg-fixed bg-center bg-opacity-30 bg-cover bg-no-repeat bg-custom-radial" style={{ backgroundImage: "url('/images/bgTexture.jpg')"}}>
      {/* <div className="absolute inset-0 bg-[#715810] bg-opacity-30 flex flex-col md:flex-row items-center justify-center space-y-3 gap-4"> */}
        <motion.div
          className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-80 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center mb-4">
            {/* Ícono */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fácil Acceso</h3>
          <p className="text-gray-600 mb-4">Conoce nuestra ubicación y visítanos fácilmente.</p>
          <a href="#" className="text-[#715810] font-semibold hover:underline">Conoce nuestra ubicación</a>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-80 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center items-center mb-4">
            <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.485 2 2 6.485 2 12c0 5.514 4.485 10 10 10 5.514 0 10-4.486 10-10 0-5.515-4.486-10-10-10zm2 15v-4h2v-2h-2v-1.6c0-.896.542-1.4 1.381-1.4H16v-2h-1.036C13.016 6 12 7.015 12 8.762V11H10v2h2v4h2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Eventos</h3>
          <p className="text-gray-600 mb-4">Descubre más sobre nuestros eventos en nuestras redes.</p>
          <a href="#" className="text-[#715810] font-semibold hover:underline">Visitar nuestras redes sociales</a>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 w-80 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center items-center mb-4">
            <svg className="w-10 h-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V5c0-1.104-.896-2-2-2zm-2 16H6V5h12v14zm-6-6h4v-2h-4v2zm0 4h4v-2h-4v2zm-6-4h4v-2H6v2zm0 4h4v-2H6v2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Menú</h3>
          <p className="text-gray-600 mb-4">Explora nuestro delicioso menú y sabores únicos.</p>
          <a href="#" className="text-[#715810] font-semibold hover:underline">Conoce nuestro menú</a>
        </motion.div>
    </section>
  );
};

export default ParallaxSection;
