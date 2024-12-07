'use client'

import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/images/goros1.jpg',
    thumbnail: '/images/goros1.jpg',
  },
  {
    original: '/images/goros2.jpg',
    thumbnail: '/images/goros2.jpg',
  },  {
    original: '/menu1.jpg',
    thumbnail: '/menu1.jpg',
  },  {
    original: '/menu2.jpg',
    thumbnail: '/menu2.jpg',
  },  {
    original: '/menu3.jpg',
    thumbnail: '/menu3.jpg',
  }
];

export default function Gallery() {

    // Estado para la posición de los thumbnails
    const [thumbnailPosition, setThumbnailPosition] = useState('bottom');

    // Función para manejar el cambio del tamaño de la pantalla
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setThumbnailPosition('right');  // Para tablet y desktop
      } else {
        setThumbnailPosition('bottom'); // Para mobile
      }
    };
  
    // Hook para escuchar los cambios de tamaño de pantalla
    useEffect(() => {
      // Setea la posición al cargar la página
      handleResize();
  
      // Agrega el listener para el resize de pantalla
      window.addEventListener('resize', handleResize);
  
      // Limpia el listener cuando se desmonta el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return <ImageGallery 
  items={images} 
  thumbnailPosition={thumbnailPosition}
  />;
}
