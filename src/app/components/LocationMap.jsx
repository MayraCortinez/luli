import React from 'react';

function LocationMap() {
  return (
    <section className="bg-[url('/images/bgWood.jpg')] bg-fixed bg-cover bg-center flex place-items-center justify-center relative" id="ubication" scroll-section>
      <div className=" w-full p-36 mx-0 px-8 bg-[#311f0d] bg-opacity-65">
        <div className="text-center mb-8">
          <h2 className="text-3xl tracking-tight text-gray-100 sm:text-4xl font-serif">
            Nuestra Ubicación
          </h2>
        </div>

        {/* Google Maps iframe */}
        <div className="flex justify-center flex-col ">
          <div className="w-full h-72 p-6 md:p-16 md:h-96 lg:h-[500px] relative rounded-lg overflow-hidden">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.74603548448!2d-59.866812325198794!3d-34.83747736987953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bea700485b4ab3%3A0x84c437c03f5a4bc0!2sLa%20luli!5e0!3m2!1ses-419!2sar!4v1727205034284!5m2!1ses-419!2sar"
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
                  {/* Contact Info */}
        <div className="text-center mt-8 ">
          <div className="text-lg text-gray-200">¿Prefieres hacer una reserva por teléfono?<br /> Llámanos al <span className="font-bold text-red-100">+54 2346 531691</span></div>
          <div className="mt-2 text-sm text-gray-100">Dirección: Calles 11 de Septiembre y Los Ceibos, Ruta Nacional 5 (Km. 145), <br /> Gorostiaga, Chivilcoy, Provincia de Buenos Aires, Argentina</div>
        </div>
      </div>
        </div>

    </section>
  );
}

export default LocationMap;
