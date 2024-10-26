// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/AdminControlPanel/AdminPanel';
import GestionEventos from './pages/GestionEventos/GestionarEventos';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import SculpturesPage from './pages/sculptures/SculpturesPage';
import SculptorPage from './pages/Sculptor/SculptorPage';
import EventosPage from './pages/Eventos/EventosPage';
import CrearEvento from './pages/GestionEventos/components/CrearEvento';
import ModificarEvento from './pages/GestionEventos/components/ModificarEvento';
import VerEvento from './pages/GestionEventos/components/VerEvento';
import VotesPage from './pages/Votos/VotesPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal - Home */}
        <Route path="/" element={<Home />} />

        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para el panel de administración */}
        <Route path="/AdminPanel" element={<AdminPanel />} />

        {/* Ruta para gestionar eventos */}
        <Route path="/gestionar-eventos" element={<GestionEventos />} />
        <Route path="/crear-evento" element={<CrearEvento />} />
        <Route path="/modificar-evento/:id" element={<ModificarEvento />} />
        <Route path="/ver-evento/:id" element={<VerEvento />} />


        {/* Ruta para las esculturas */}
        <Route path="/esculturas" element={<SculpturesPage />} />

        {/* Ruta para los eventos */}
        <Route path="/eventos" element={<EventosPage />} />

        {/* Ruta para los escultores */}
        <Route path="/escultores" element={<SculptorPage />} />

        <Route path="/vote" element={<VotesPage />} />

      </Routes>
    </Router>
  );
}

export default App;