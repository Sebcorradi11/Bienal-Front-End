// src/routes/privateRoutes/index.ts
import AdminPanel from '../../pages/AdminControlPanel/AdminPanel';
import GestionEventos from '../../pages/GestionEventos/GestionarEventos';
import CrearEvento from '../../pages/GestionEventos/components/Eventos/CrearEvento';
import ModificarEvento from '../../pages/GestionEventos/components/Eventos/ModificarEvento';
import VerEvento from '../../pages/GestionEventos/components/Eventos/VerEvento';
import CrearEscultor from '../../pages/GestionEventos/components/Escultores/AgregarEscultores';
import ModificarEscultor from '../../pages/GestionEventos/components/Escultores/ModificarEscultores';
import VerEscultor from '../../pages/GestionEventos/components/Escultores/VerEscultores';

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
  {
    path: "/agregar-escultores",
    component: CrearEscultor,
  },
  {
    path: "/modificar-escultores/:id",
    component: ModificarEscultor,
  },
  {
    path: "/ver-escultores/:id",
    component: VerEscultor,
  },
];
