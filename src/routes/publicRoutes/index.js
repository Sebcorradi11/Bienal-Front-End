// src/routes/publicRoutes/index.ts
import SculpturesPage from '../../pages/sculptures/SculpturesPage';
import SculptorPage from '../../pages/Sculptor/SculptorPage';
import EventosPage from '../../pages/Eventos/EventosPage';
import VotesPage from '../../pages/Votos/VotesPage';
import Home from '../../pages/home/Home';
import LoginPage from '../../pages/login/Login';
import QrPage from '../../pages/Qr/Qrpage';

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
    path: "/vote",
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
];
