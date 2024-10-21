// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionEventos from './pages/EventManagement';
import HomeAdmin from './pages/HomeAdmin';
import Login from './components/LoginAdmin';
import AddEventPage from './pages/AddEventPage';
import VotePage from './pages/VotePage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/gestionar-eventos" element={<GestionEventos />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
