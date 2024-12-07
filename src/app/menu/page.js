'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

const MenuHome = () => {
  const menuData = [
    {
      id: 'friday',
      title: 'Viernes',
      items: ['Pizzas', 'Empanadas', 'Hamburguesas'],
    },
    {
      id: 'saturday',
      title: 'Sábados - Parrilla Libre',
      categories: [
        { title: 'Entradas', items: ['Chorizo', 'Morcilla', 'Provoleta'] },
        { title: 'Carnes a la Parrilla', items: ['Asado', 'Vacío', 'Matambre'] },
        { title: 'Postres', items: ['Helado', 'Flan', 'Ensalada de Frutas'] },
      ],
    },
    {
      id: 'sunday',
      title: 'Domingos',
      items: ['Pastel de Papa', 'Pollo al Horno', 'Tarta de Verduras'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const goToHome = () => {
    window.location.href = "/#menu";
  };

  return (
    <section>
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

        {/* Navigation Links */}
        <nav className="flex justify-center mb-12">
          {menuData.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="mx-4 md:text-2xl font-medium text-[#715810]/80 hover:underline"
            >
              {section.title.split(' - ')[0]}
            </Link>
          ))}
        </nav>

        {/* Sections */}
        {menuData.map((section) => (
          <section key={section.id} id={section.id} className="mb-12">
            <motion.h3
              className="text-3xl font-semibold text-[#622121] mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {section.title}
            </motion.h3>

            {section.categories ? (
              section.categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-8">
                  <h4 className="text-2xl font-semibold text-[#622121] italic mb-4">
                    {category.title}
                  </h4>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, index) => (
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
                          src={`/menu${catIndex + 1}.jpg`}
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
                </div>
              ))
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, index) => (
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
                      src="/menu2.jpg"
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
            )}
          </section>
        ))}
      </section>

      {/* Botón de ir al Home */}
      <button
        onClick={goToHome}
        className="fixed bottom-8 right-8 p-4 bg-[#622121] text-white rounded-full shadow-lg hover:bg-[#511a1a] transition-all z-50"
        aria-label="Go to home"
      >
        <Home size={32} />
      </button>
    </section>
  );
};

export default MenuHome;
