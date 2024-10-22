
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionEventos from './pages/EventManagement';
import HomeAdmin from './pages/HomeAdmin';
import Login from './pages/Login';
import AddEventPage from './pages/AddEventPage';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/gestionar-eventos" element={<GestionEventos />} />
        <Route path="/add-event" element={<AddEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
