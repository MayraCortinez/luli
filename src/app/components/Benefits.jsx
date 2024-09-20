import React from 'react';
import Cards from './Cards';

function Benefits() {
  return (
    <section className="py-8 my-16">
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Cards
          title="¡Escaparse al campo nunca fue tan fácil!"
          description="🚗 Fácil acceso desde Buenos Aires. Un viaje corto para desconectarte y disfrutar de la tranquilidad."
          image="/gorostiaga1.jpeg"
          alt="almacén antiguo ubicado en Gorostiaga"
          buttonLabel="Conoce nuestra Ubicación"
        />
        <Cards
          title="Vive una experiencia única"
          description="🌿 Sumérgete en la naturaleza y disfruta de una estancia inolvidable."
          image="/gorostiaga12.jpeg"
          alt="Paisaje del campo"
          buttonLabel="Explora más"
        />
        <Cards
          title="Sabor auténtico"
          description="🍴 Deléitate con nuestra gastronomía tradicional en un ambiente rural."
          image="/menu3.jpg"
          alt="Plato de comida tradicional"
          buttonLabel="Descubre nuestro menú"
        />
      </div>
    </section>
  );
}

export default Benefits;
