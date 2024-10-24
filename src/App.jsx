import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionEventos from './pages/AdminControlPanel/components/EventManagement';
import AdminPanel from './pages/AdminControlPanel/AdminPanel';
import Login from './pages/login/Login';
import AddEventPage from './pages/AdminControlPanel/AddEventPage';
import Home from './pages/home/Home';
import SculpturesPage from './pages/sculptures/SculpturesPage';
import SculptorPage from './pages/Sculptor/SculptorPage';
import EventosPage from './pages/Eventos/EventosPage';
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

        {/* Ruta para agregar un evento */}
        <Route path="/add-event" element={<AddEventPage />} />

        <Route path="/esculturas" element={<SculpturesPage />} />
        
        <Route path="/eventos" element={<EventosPage />} />

        <Route path="/escultores" element={<SculptorPage />} />

        <Route path="/vote" element={<VotesPage/>} />

      </Routes>
    </Router>
  );
}

export default App;