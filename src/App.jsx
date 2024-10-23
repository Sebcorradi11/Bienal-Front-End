import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionEventos from './pages/AdminControlPanel/components/EventManagement';
import AdminPanel from './pages/AdminControlPanel/AdminPanel';
import Login from './pages/login/Login';
import AddEventPage from './pages/AdminControlPanel/AddEventPage';
import Home from './pages/home/Home';
import SculptorPage from './pages/Sculptor/SculptorPage'; // Asegúrate de que la ruta sea correcta

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

        {/* Ruta para la página de escultores */}
        <Route path="/escultores" element={<SculptorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
