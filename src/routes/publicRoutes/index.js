// src/routes/publicRoutes/index.ts
import SculpturesPage from '../../pages/sculptures/SculpturesPage';
import SculptorPage from '../../pages/Sculptor/SculptorPage';
import EventosPage from '../../pages/Eventos/EventosPage';
import VotesPage from '../../pages/Votos/VotesPage';
import Home from '../../pages/home/Home';
import LoginPage from '../../pages/login/Login';
import QrPage from '../../pages/Qr/Qrpage';
import VerEsculturaPublic from '../../pages/sculptures/components/verEsculturaPublic';
import VerEvento1 from '../../pages/Eventos/components/verEvento1';
export const onlyPublicRoute = [
  {
    path: "/esculturas",
    component: SculpturesPage,
  },
  {
    path: "/escultores",
    component: SculptorPage,
  },
  {
    path: "/eventos",
    component: EventosPage,
  },
  {
    path: "/vote/:id_escultor/:id_evento/:token",
    component: VotesPage,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/qr",
    component: QrPage,
  },
  
  {
    path: "/ver-evento-public/:id",
    component: VerEvento1,
  }
  {
    path: "/ver-escultura-public/:id",
    component: VerEsculturaPublic,
  }
];
