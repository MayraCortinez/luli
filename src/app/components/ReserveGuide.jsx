import React from 'react';
import styles from '../styles/components/reserveGuide.module.css'

function ReserveGuide() {
  return (
    <section className={styles.body}>
      <section className="m-12 md:m-24 lg:m-32 rounded-lg py-12 px-4 bg-gray-100">
      {/* Título */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Reserva tu lugar fácilmente</h2>
      
      {/* Pasos */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Paso 1 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4 w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full text-2xl">
            <img src="/icons/call.svg" alt="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Llamada recomendada</h3>
          <p className="text-gray-600">
            Para una confirmación rápida, te recomendamos llamar al <span className="font-bold">xxx</span>.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
            <img src="/icons/whatsapp.svg" alt="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Reserva en línea</h3>
          <p className="text-gray-600 mb-4">
            Completa el formulario y luego te redirigiremos a WhatsApp para confirmar tu reserva.
          </p>
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600">
            Hacer Reserva
          </button>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
            <img src="icons/money.svg" alt="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Forma de pago</h3>
          <p className="text-gray-600">
            Recuerda que el pago se realiza en efectivo. La reserva no tiene costo.
          </p>
        </div>

        {/* Paso 4 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4 w-16 h-16 flex items-center justify-center text-white rounded-full text-2xl">
            <img src="/icons/family.svg" alt="" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tipos de reuniones</h3>
          <p className="text-gray-600">
            Ofrecemos opciones de reserva para eventos especiales como reuniones familiares, cumpleaños, y más.
          </p>
        </div>
      </div>

      {/* Información adicional */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm lg:text-lg">
          ¿Tienes alguna pregunta? Llámanos al <span className="font-bold">xxx</span> para más detalles o consulta el botón de reserva.
        </p>
      </div>
    </section>
    </section>
  );
}

export default ReserveGuide;