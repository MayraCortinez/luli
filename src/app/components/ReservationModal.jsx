'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import styles from '../styles/components/reservationModal.module.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const ReservationModal = ({isOpen, onClose}) => {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(null);

  const onSubmit = (data) => {
    const whatsappNumber = '5491178865748'; // Número del administrador
    const message = `Reserva confirmada para ${data.name}, ${data.people} personas el ${startDate?.toLocaleDateString()}. Comentarios: ${data.comments}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña para enviar el mensaje
  };

  const filterDays = (date) => {
    const day = date.getDay();
    return day === 5 || day === 6 || day === 0; // Solo permitir viernes, sábado y domingo
  };

  // Si el modal no está abierto, no se renderiza
  if (!isOpen) return null;

  return (
    <Modal
      aria-labelledby="reservation-modal-title"
      aria-describedby="reservation-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
       <Fade in={isOpen}>
      
    <form sx={modalStyle} className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} onClick={onClose}>
      <div 
        onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro del contenido
        className={styles.modalContent}
      >

      <button className={styles.closeButton} onClick={onClose}>
          &times;
      </button>
      <h3> Reservar </h3>
      <TextField
        id="outlined-basic"
        label="Nombre y Apellido"
        variant="outlined"
        {...register('name')}
        fullWidth
        required
        className={styles.formField}
        margin='normal'
      />
      <TextField
        id="outlined-basic"
        label="Cantidad de Personas"
        variant="outlined"
        type="number"
        {...register('people')}
        fullWidth
        required
        style={{ marginTop: '16px' }}
      />
      <label style={{ marginTop: '16px', display: 'block' }}>Fecha:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Seleccione una fecha"
        filterDate={filterDays}
        minDate={new Date()}
        customInput={
          <TextField
            id="outlined-basic"
            label="Día/Mes/Año"
            variant="outlined"
            fullWidth
            style={{ marginTop: '16px'}}
          />
        }
      />
      <TextField
        id="outlined-basic"
        label="Comentarios"
        variant="outlined"
        {...register('comments')}
        fullWidth
        multiline
        rows={4}
        style={{ marginTop: '16px' }}
      />
      <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Confirmar Reserva
            </Button>
      </div>
    </form>

    </Fade>
    </Modal>
      
  );
};

export default ReservationModal;
