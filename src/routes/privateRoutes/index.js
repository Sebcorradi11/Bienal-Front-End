// src/routes/privateRoutes/index.ts
import AdminPanel from '../../pages/AdminControlPanel/AdminPanel';
import GestionEventos from '../../pages/GestionEventos/GestionarEventos';
import CrearEvento from '../../pages/GestionEventos/components/Eventos/CrearEvento';
import ModificarEvento from '../../pages/GestionEventos/components/Eventos/ModificarEvento';
import VerEvento from '../../pages/GestionEventos/components/Eventos/VerEvento';
import CrearEscultor from '../../pages/GestionEventos/components/Escultores/AgregarEscultores';
import ModificarEscultor from '../../pages/GestionEventos/components/Escultores/ModificarEscultores';
import VerEscultor from '../../pages/GestionEventos/components/Escultores/VerEscultores';
import GestionarEsculturas from '../../pages/GestionEsculturas/GestionarEsculturas';
import CrearEsculturas from '../../pages/GestionEsculturas/components/CrearEscultura';
import ModificarEscultura from '../../pages/GestionEsculturas/components/ModificarEscultura';
import VerEscultura from '../../pages/GestionEsculturas/components/VerEscultura';


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
    path: "/gestionar-esculturas",
    component: GestionarEsculturas,
  },
  {
    path: "/crear-escultura",
    component: CrearEsculturas,
  },
  {
    path: "/modificar-escultura/:id",
    component: ModificarEscultura,
  },
  {
    path: "/ver-escultura/:id",
    component: VerEscultura,
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
