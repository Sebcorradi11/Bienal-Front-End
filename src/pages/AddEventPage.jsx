import React, { useState } from 'react';
import { Snackbar, Alert, Container } from '@mui/material';
import FormAddEvent from '../components/FormAddEvent';
import Header from '../components/Header'; // Importa el Header

const AddEventPage = () => {
  const [events, setEvents] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
    setSuccess(true);
  };

  return (
    <>
      <Header /> {/* Usa el Header */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <FormAddEvent onSubmit={handleAddEvent} />
        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success">
            ¡Evento agregado con éxito!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default AddEventPage;
