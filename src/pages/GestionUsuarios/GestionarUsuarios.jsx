import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import { Box, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import LoaderSpinner from '../../components/LoaderSpinner';

const GestionarUsuarios = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);

        const users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUserData(users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const cambiarRol = async (userId, nuevoRol) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { role: nuevoRol });

      setUserData((prevData) =>
        prevData.map((user) =>
          user.id === userId ? { ...user, role: nuevoRol } : user
        )
      );
    } catch (error) {
      console.error("Error al cambiar el rol del usuario:", error);
    }
  };

  const handleAtras = () => {
    navigate(-1);
  };

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}.${minutes}`;
};

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderPublic />
      {isLoading && <LoaderSpinner />}
      <Container sx={{ mt: 4, flexGrow: 1 }}>
      
        {/* Botón de retroceso */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleAtras}
            sx={{
              height: '50px',
              width: '200px',
              borderRadius: '25px',
              backgroundColor: '#1976d2',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Atrás
          </Button>
        </Box>
        {/* Sección de Usuarios */}
        <Box sx={{ mb: 3 }}>
          {userData.map((user) => (
            <Box
              key={user.id}
              sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box sx={{ flex: 1, mb: isSmallScreen ? 2 : 0 }}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>Rol actual: {user.role}</p>
                <p>Fecha de creación: {formatDate(user.createdAt)}</p>
              </Box>
            
              <Box sx={{ display: 'flex', gap: 1 }}>
              {user.role === 'admin' ? (                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => cambiarRol(user.id, 'user')}
                  sx={{
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Cambiar a Usuario
                </Button>) : (<Button
                  variant="contained"
                  color="primary"
                  onClick={() => cambiarRol(user.id, 'admin')}
                  sx={{
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  Cambiar a Admin
                </Button>)}
                

              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default GestionarUsuarios;
