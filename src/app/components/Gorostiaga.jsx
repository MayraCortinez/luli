'use client'

import { motion } from 'framer-motion'; // Importa Framer Motion
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Events = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="restaurant" className="w-full flex justify-center place-items-center mx-auto px-4 md:p-2 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-white/30 to-[#715810]/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient font-serif">
              Gorostiaga te espera
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl text-[#715810] font-serif italic">
              "Descubre nuestro restaurante de campo en Gorostiaga, a pocos kilómetros de Buenos Aires. Donde el tiempo parece detenerse y cada momento se saborea al máximo."
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#ubication"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-white shadow-xl hover:scale transition-colors bg-gradient-to-l from-[#715810]/50 to-[#715810]/70 hover:bg-[#715810]/70 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Conoce nuestra ubicación
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <motion.div
              className="rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/imageFriends.jpg"
                width={550}
                height={310}
                alt="Restaurant Dish"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "550/310", objectFit: "cover" }}
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/goros5.jpg"
                  width={260}
                  height={260}
                  alt="Restaurant Dish"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "260/260", objectFit: "cover" }}
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/images/goros1.jpg"
                  width={260}
                  height={260}
                  alt="Restaurant Dish"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "260/260", objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
