'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/components/reserveGuide.module.css';

function ReserveGuide() {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className={styles.body}>
      <section className="m-12 md:m-24 lg:m-32 rounded-lg py-12 px-4 bg-gray-100 filter-none">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#715810]/30 via-[#715810]/20 to-transparent" />
        {/* Título */}
        <motion.h2
          className="text-center text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reserva tu lugar fácilmente
        </motion.h2>
        
        {/* Pasos */}
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Paso 1 */}
          <motion.div
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full text-2xl">
              <img src="/icons/call.svg" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Llamada recomendada</h3>
            <p className="text-[#622121]/90 font-semibold">
              Para una confirmación rápida, te recomendamos llamar al <span className="font-bold">xxx</span>.
            </p>
          </motion.div>

          {/* Paso 2 */}
          <motion.div
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
              <img src="/icons/whatsapp.svg" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Reserva en línea</h3>
            <p className="text-[#622121]/90 font-semibold mb-4">
              Completa el formulario y luego te redirigiremos a WhatsApp para confirmar tu reserva.
            </p>
            <button className="bg-[#D2691E]/90 shadow-md shadow-[#622121] text-white px-4 py-2 rounded-lg hover:bg-[#D2691E] ">
             RESERVAR
            </button>
          </motion.div>

          {/* Paso 3 */}
          <motion.div
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
              <img src="icons/money.svg" alt="" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Forma de pago</h3>
            <p className="text-[#622121]/90 font-semibold">
              Recuerda que el pago se realiza en efectivo. La reserva es gratuita.
            </p>
          </motion.div>

          {/* Paso 4 */}
          <motion.div
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
              <img src="/icons/family.svg" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ambiente familiar</h3>
            <p className="text-[#622121]/90 font-semibold">
            Ambiente acogedor y familiar donde todos son bienvenidos. </p>
          </motion.div>
        </div>

        {/* Información adicional */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#622121]/80 text-sm lg:text-lg">
            ¿Tienes alguna pregunta? Llámanos para más detalles o consulta el botón de reserva.
          </p>
        </motion.div>
      </section>
    </section>
  );
}

export default ReserveGuide;
