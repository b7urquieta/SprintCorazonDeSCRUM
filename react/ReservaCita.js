// ReservaCita.js
import React, { useState } from 'react';
import './ReservaCita.css';

function ReservaCita() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleReserva = () => {
    // Lógica para reservar cita
  };

  return (
    <div>
      <h2>Reserva de Cita en Línea</h2>
      <label>Fecha:</label>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <br />
      <label>Hora:</label>
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <br />
      <button onClick={handleReserva}>Reservar Cita</button>
    </div>
  );
}