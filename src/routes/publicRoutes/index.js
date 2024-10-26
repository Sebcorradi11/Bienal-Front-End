// src/routes/publicRoutes/index.ts
import SculpturesPage from '../../pages/sculptures/SculpturesPage';
import SculptorPage from '../../pages/Sculptor/SculptorPage';
import EventosPage from '../../pages/Eventos/EventosPage';
import VotesPage from '../../pages/Votos/VotesPage';
import Home from '../../pages/home/Home';
import Login from '../../pages/Login/Login';

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
    component: Login,
  },
];
