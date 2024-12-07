'use client'

import { motion } from "framer-motion";
import Link from 'next/link';
import { Leaf, Beef, IceCream } from "lucide-react";

const menuLinks = {
  starters: "/menu#starters",
  main: "/menu#main",
  desserts: "/menu#desserts"
};

const MenuHome = () => {

    const menuLinks = {
        starters: "/menu#starters",
        main: "/menu#main",
        desserts: "/menu#desserts"
      };

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <Link href={menuLinks.starters}>
              <div className="block p-6 md:py-9 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:shadow-lg">
                <div className="flex items-center">
                  <Leaf className="w-8 h-8 text-[#715810] mr-4" />
                  <h4 className="text-xl font-serif font-semibold text-[#715810]">
                    Entradas
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <Link href={menuLinks.main}>
              <div className="block p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:shadow-lg">
                <div className="flex items-center">
                  <Beef className="w-8 h-8 text-[#715810] mr-4" />
                  <h4 className="text-xl font-serif font-semibold text-[#715810]">
                    Platos Principales
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <Link href={menuLinks.main}>
              <div className="block p-6 md:py-9 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:shadow-lg">
                <div className="flex items-center">
                  <IceCream className="w-8 h-8 text-[#715810] mr-4" />
                  <h4 className="text-xl font-serif font-semibold text-[#715810]">
                    Postres
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuHome;
