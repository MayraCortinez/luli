'use client'

import React from 'react'
import { motion } from "framer-motion";

const TextBanner = () => {
  return (
    <>
       {/* Banner Advertisement */}
       <div className="bg-[#622121]/90 text-white py-6 px-6 text-center animate-fade-in">
       <h3 className="text-2xl font-bold mb-2">¡Sábados Parrilla Libre con Show!</h3>
       <p className="text-lg">Disfruta de nuestra parrilla libre todos los sábados con show en vivo</p>
     </div>
    <section className="py-28 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#715810] mb-6">
            Bienvenidos a La Luli
          </h2>
          <p className="text-2xl text-[#622121] mb-8 leading-relaxed font-serif">
            En el corazón del campo, La Luli te invita a descubrir una experiencia gastronómica única. 
            Nuestros platos, elaborados con ingredientes frescos y locales, son un homenaje a la 
            cocina tradicional con un toque contemporáneo.
          </p>
          <div className="text-xl font-semibold text-[#715810]">
            ¡Haz tu reserva ahora y vive una experiencia campestre inolvidable!
          </div>
        </motion.div>
      </div>
    </section>

    </>
  )
}

export default TextBanner;