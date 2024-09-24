import React from 'react';
import Cards from './Cards';


function Benefits() {

  const benefits = [
    {
      title : 'Cada acorde, una historia:',
      description: 'Disfruta del talento local con nuestros shows.',
    },
    {
      title: 'Sábados de parrillada libre:',
      description: 'Nuestra mayor tradición argentina, para disfrutar sin límites.',
    },
    {
      title: 'Ambiente familiar:',
      description: 'Un espacio acogedor, grandes y chicos se sienten como en casa.',
    },
    {
      title: 'Ritmo que conecta:',
      description: 'El baile invita a todos a unirse a la diversión.',
    }
  ]


  return (
    <>
    <section className="py-16 bg-white">
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
    <section className="py-18 sm:py-12 bg-red-100/20">
    <div className="container mx-auto px-4">
  
      {/* Beneficios Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Beneficios */}
        {benefits.map((benefit, index) => (
        <div 
        key={index}
        className="p-6 bg-[url('/images/bg2.jpg')] backdrop:blur-lg backdrop-filter filter bg-cover bg-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 h-1/3 text-red-950">{benefit.title}</h3>
          <p className=" bg-yellow-950/50 text-white text-lg rounded-md p-4 h-2/3 items-center">
            {benefit.description}</p>
        </div>
        ))}
      </div>
    </div>
  </section>
    </>
  );
}

export default Benefits;
