
import React, { useState } from 'react';
import { Snackbar, Alert, Container } from '@mui/material';
import FormAddEvent from '../components/FormAddEvent';

const AddEventPage = () => {
  const [events, setEvents] = useState([]); // Estado para los eventos
  const [success, setSuccess] = useState(false); // Estado para notificación de éxito


  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]); // Añade el evento al estado
    setSuccess(true); // Activa el Snackbar de éxito
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <FormAddEvent onSubmit={handleAddEvent} /> {/* Renderiza el formulario */}

      {/* Snackbar para notificación de éxito */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          ¡Evento agregado con éxito!
        </Alert>
      </Snackbar>
    </Container>
  );
};

// Exporta la página como exportación por defecto
export default AddEventPage;
