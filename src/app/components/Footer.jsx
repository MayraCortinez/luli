'use client'

import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4e342e] via-[#3b2409]/80 to-[#4e342e] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Botones */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {/* Botón de Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#F5F5DC] text-[#715810] rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <Facebook className="w-6 h-6" />
          </a>
          {/* Botón Reservar */}
          <a
            href="#reservar"
            className="px-6 py-3 bg-[#F5F5DC] text-[#715810] rounded-lg font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Reservar
          </a>
        </div>
        {/* Firma */}
        <a
            href="https://www.linkedin.com/in/mayra-cortinez-/"
            target="_blank"
            rel="noopener noreferrer"
          >
        <p className="text-sm font-light text-white hover:scale-105 text-center md:text-right">
          &copy; {new Date().getFullYear()} Mayra Cortinez - Desarrollo Web
        </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
