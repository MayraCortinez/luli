"use client";

import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};  

// Establece el root element para el modal
Modal.setAppElement('#__next');

export default function Eventos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventos = [
    { id: 1, nombre: 'Peña de Agosto', fecha: '10 de Agosto' },
    { id: 2, nombre: 'Peña de Septiembre', fecha: '15 de Septiembre' },
    // Otros eventos...
  ];

  const openModal = (evento) => {
    setSelectedEvent(evento);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <h1>Eventos Disponibles</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {eventos.map((evento) => (
          <div key={evento.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <h2>{evento.nombre}</h2>
            <p>{evento.fecha}</p>
            <button onClick={() => openModal(evento)}>Reservar</button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Reservar Evento"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Reserva para {selectedEvent?.nombre}</h2>
        <p>Fecha: {selectedEvent?.fecha}</p>
        <form>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <button type="submit">Confirmar Reserva</button>
        </form>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
}
