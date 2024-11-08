// src/routes/userRoutes/index.ts
import VotesPage from '../../pages/Votos/VotesPage';


export const onlyUserRoute = [
  {
    path: "/vote/:id_escultor/:id_evento/:token",
    component: VotesPage,
  }
];
