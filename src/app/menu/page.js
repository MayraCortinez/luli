'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const Menu = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section >
      <section className="p-12 md:m-24 lg:m-32 rounded-xl py-12 bg-gradient-to-l from-[#715810]/30 to-transparent filter-none">
        <motion.h2
          className="text-center text-4xl font-bold text-[#715810] mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Menú de Campo
        </motion.h2>

        <nav className="flex justify-center mb-12">
          <Link href="#friday" className="mx-4 md:text-2xl font-medium text-[#715810]/80 hover:underline">Viernes</Link>
          <Link href="#saturday" className="mx-4 md:text-2xl font-medium text-[#715810]/80 hover:underline">Sábados</Link>
          <Link href="#sunday" className="mx-4 md:text-2xl font-medium text-[#715810]/80 hover:underline">Domingos</Link>
        </nav>
        
        <section id="friday" className="mb-12">
          <motion.h3
            className="text-3xl font-semibold text-[#622121] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Viernes
          </motion.h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['Pizzas', 'Empanadas', 'Hamburguesas'].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={`/menu2.jpg`}
                  width={300}
                  height={200}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#622121] mb-2">{item}</h4>
                  <p className="text-[#622121]/90">Descripción deliciosa de {item.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="saturday" className="mb-12">
          <motion.h3
            className="text-3xl font-semibold text-[#622121] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sábados - Parrilla Libre
          </motion.h3>
          
          <h4 className="text-2xl font-semibold text-[#622121] italic mb-4">Entradas</h4>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {['Chorizo', 'Morcilla', 'Provoleta'].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={`/menu1.jpg`}
                  width={300}
                  height={200}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#622121] mb-2">{item}</h4>
                  <p className="text-[#622121]/90">Descripción deliciosa de {item.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold text-[#622121] italic mb-4">Carnes a la Parrilla</h4>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {['Asado', 'Vacío', 'Matambre'].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={`/menu2.jpg`}
                  width={300}
                  height={200}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#622121] mb-2">{item}</h4>
                  <p className="text-[#622121]/90">Descripción deliciosa de {item.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold text-[#622121] italic mb-4">Postres</h4>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {['Helado', 'Flan', 'Ensalada de Frutas'].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={`/menu3.jpg`}
                  width={300}
                  height={200}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#622121] mb-2">{item}</h4>
                  <p className="text-[#622121]/90">Descripción deliciosa de {item.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="sunday" className="mb-12">
          <motion.h3
            className="text-3xl font-semibold text-[#622121] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Domingos
          </motion.h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['Pastel de Papa', 'Pollo al Horno', 'Tarta de Verduras'].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={`/menu1.jpg`}
                  width={300}
                  height={200}
                  alt={item}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#622121] mb-2">{item}</h4>
                  <p className="text-[#622121]/90">Descripción deliciosa de {item.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Menu;
