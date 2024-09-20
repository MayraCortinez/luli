import * as React from 'react';
import Image from 'next/image'; // Usamos el componente Image de Next.js para optimizar las imágenes
import styles from '../styles/components/cards.module.css';

export default function Cards({ title, description, image, alt, buttonLabel }) {
  return (
    <div className="flex flex-col h-full max-w-xs bg-white rounded-lg shadow-lg">
      <div className="relative h-48 w-full">
        {/* Imagen con altura fija */}
        <Image
          src={image} 
          alt={alt}
          fill // Esto asegura que la imagen llene el contenedor
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        {/* Título */}
        <h5 className={styles.title}>{title}</h5>
        {/* Descripción */}
        <p className="text-gray-700 text-sm mb-4 flex-grow">
          {description}
        </p>
        {/* Botón */}
        <div className="mt-auto">
          <button className={styles.buttonLabel}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

