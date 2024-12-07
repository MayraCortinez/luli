'use client'

import { motion } from "framer-motion";
import Link from 'next/link';
import { Leaf, Beef, IceCream, ArrowRight } from "lucide-react";

const menuLinks = {
  starters: "/menu#starters",
  main: "/menu#main",
  desserts: "/menu#desserts"
};

const MenuHome = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F5F5DC]/30 backdrop-blur-sm" id="menu">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-serif text-[#715810] text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestro Menú
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(menuLinks).map(([key, link], index) => {
            const icons = {
              starters: <Leaf className="w-8 h-8 text-[#715810] mr-4" />,
              main: <Beef className="w-8 h-8 text-[#715810] mr-4" />,
              desserts: <IceCream className="w-8 h-8 text-[#715810] mr-4" />,
            };

            const titles = {
              starters: "Entradas",
              main: "Platos Principales",
              desserts: "Postres",
            };

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="transform transition-all duration-300 group"
              >
                <Link href={link}>
                  <div className="block p-6 md:py-9 h-full shadow-md shadow-[#715810] bg-white/30 backdrop-blur-md border border-white/20 rounded-lg relative">
                    <div className="flex items-center">
                      {icons[key]}
                      <h4 className="text-xl font-serif font-semibold text-[#715810]">
                        {titles[key]}
                      </h4>
                    </div>
                    <div className="mt-4 flex items-center text-[#715810] font-medium text-sm">
                      <span className="hover:font-bold">Ir al menú</span>
                      <motion.div
                        className="ml-2 transform transition-transform group-hover:translate-x-2"
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuHome;
