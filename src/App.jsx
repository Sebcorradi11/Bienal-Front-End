import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';  // Importar QueryClientProvider y QueryClient
import GestionEventos from './pages/AdminControlPanel/components/EventManagement';
import AdminPanel from './pages/AdminControlPanel/AdminPanel';
import Login from './pages/login/Login';
import AddEventPage from './pages/AdminControlPanel/AddEventPage';
import Home from './pages/home/Home';
import SculpturesPage from './pages/sculptures/SculpturesPage';
import SculptorPage from './pages/Sculptor/SculptorPage';
import EventosPage from './pages/Eventos/EventosPage';

// Crea una instancia de QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
         
          <Route path="/" element={<Home />} />

         
          <Route path="/login" element={<Login />} />

          
          <Route path="/adminPanel" element={<AdminPanel />} />

          
          <Route path="/gestionar-eventos" element={<GestionEventos />} />

         
          <Route path="/add-event" element={<AddEventPage />} />

          <Route path="/esculturas" element={<SculpturesPage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/escultores" element={<SculptorPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
