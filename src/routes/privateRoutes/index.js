// src/routes/privateRoutes/index.ts
import AdminPanel from '../../pages/AdminControlPanel/AdminPanel';
import GestionEventos from '../../pages/GestionEventos/GestionarEventos';
import CrearEvento from '../../pages/GestionEventos/components/CrearEvento';
import ModificarEvento from '../../pages/GestionEventos/components/ModificarEvento';
import VerEvento from '../../pages/GestionEventos/components/VerEvento';

export const onlyPrivateRoute = [
  {
    path: "/AdminPanel",
    component: AdminPanel,
  },
  {
    path: "/gestionar-eventos",
    component: GestionEventos,
  },
  {
    path: "/crear-evento",
    component: CrearEvento,
  },
  {
    path: "/modificar-evento/:id",
    component: ModificarEvento,
  },
  {
    path: "/ver-evento/:id",
    component: VerEvento,
  },
];
