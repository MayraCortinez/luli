'use client'

import { Container } from "@mui/material";
import { motion } from "framer-motion";


const Testimonials = () => {
  const testimonials = [
    {
      text: "La comida es excepcional y el ambiente campestre es perfecto para escapar de la ciudad.",
      author: "María González",
      role: "Cliente Frecuente",
    },
    {
      text: "Un lugar mágico donde la naturaleza y la buena cocina se encuentran. ¡Volveremos pronto!",
      author: "Carlos Rodríguez",
      role: "Crítico Gastronómico",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#5f4c15] text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Container className="bg-[#F5F5DC] border-[#D2B48C]">
                <div className="p-8">
                  <p className="text-lg mb-4 italic text-[#715810]">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-[#715810]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#715810]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Container>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;