'use client'

import { motion } from "framer-motion";

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img4.jpg',
  '/images/img2b.jpg',
  '/images/img3.jpg',
  '/images/img1.jpg',
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-[#715810]/50 to-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#715810] text-center mb-12">
          Nuestra Experiencia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;