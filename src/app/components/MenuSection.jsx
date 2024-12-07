'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const MenuSection = () => {
  const content = [
    {
      title: 'Viernes: Pizzas, Empanadas y Hamburguesas',
      text: 'Disfruta de nuestras deliciosas pizzas, empanadas y hamburguesas, perfectas para empezar el fin de semana.',
      img: '/menu1.jpg',
    },
    {
      title: 'Sábados: Parrilla Libre',
      text: 'Entradas: Chorizo, Morcilla, Provoleta. Carnes a la Parrilla: Asado, Vacío, Matambre. Postres: Helado, Flan, Ensalada de Frutas.',
      img: '/menu2.jpg',
    },
    {
      title: 'Domingos: Pastel de Papa, Pollo al Horno, Tarta de Verduras',
      text: 'Cierra tu semana con nuestras opciones tradicionales de Pastel de Papa, Pollo al Horno y Tarta de Verduras.',
      img: '/menu3.jpg',
    },
  ];

  return (
    <section className={`container mx-auto my-8 md:my-24 py-12`}>
      {content.map((item, index) => (
        <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-center my-12`}>
          <motion.div
            className="flex-1 p-6 text-center md:text-left"
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-yellow-950 mb-4">{item.title}</h2>
            <p className="text-lg text-yellow-950/80">{item.text}</p>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="rounded-lg object-cover m-auto shadow-2xl"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default MenuSection;
