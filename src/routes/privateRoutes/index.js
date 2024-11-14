//RUTAS ADMIN PANEL
import AdminPanel from '../../pages/AdminControlPanel/AdminPanel';
import GestionEventos from '../../pages/GestionEventos/GestionarEventos';
import GestionarUsuarios from '../../pages/GestionUsuarios/GestionarUsuarios';

import GestionarEscultores from '../../pages/GestionEscultores/GestionarEscultores'
import GestionarEsculturas from '../../pages/GestionEsculturas/GestionarEsculturas';
//RUTAS GESTIONAR EVENTO
import CrearEvento from '../../pages/GestionEventos/components/Eventos/CrearEvento';
import ModificarEvento from '../../pages/GestionEventos/components/Eventos/ModificarEvento';
import VerEvento from '../../pages/GestionEventos/components/Eventos/VerEvento';
import CrearEscultores from '../../pages/GestionEventos/components/Escultores/AgregarEscultores';
import ModificarEscultores from '../../pages/GestionEventos/components/Escultores/ModificarEscultores';
import VerEscultores from '../../pages/GestionEventos/components/Escultores/VerEscultores';

//RUTAS GESTIONAR ESCULTORES
import CrearEscultor from '../../pages/GestionEscultores/components/Escultores/CrearEscultores';
import ModificarEscultor from '../../pages/GestionEscultores/components/Escultores/ModificarEscultores';
import VerEscultor from '../../pages/GestionEscultores/components/Escultores/VerEscultor';
import AgregarEscultura from '../../pages/GestionEscultores/components/Esculturas/AgregarEsculturas';
import ModificarEscultura from '../../pages/GestionEscultores/components/Esculturas/ModificarEsculturas';
import VerEsculturas from '../../pages/GestionEscultores/components/Esculturas/VerEsculturas';

//RUTAS GESTIONAR ESCULTURAS
import CrearEsculturas from '../../pages/GestionEsculturas/components/CrearEscultura';
import ModificarEsculturas from '../../pages/GestionEsculturas/components/ModificarEscultura';
import VerEscultura from '../../pages/GestionEsculturas/components/VerEscultura';


export const onlyPrivateRoute = [
  {
    path: "/AdminPanel",
    component: AdminPanel,
  },
  {
    path: "/gestionar-usuarios",
    component: GestionarUsuarios,
  },
  {
    path: "/gestionar-eventos",
    component: GestionEventos,
  },
  {
    path: "/gestionar-escultores",
    component: GestionarEscultores,
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
    component: ModificarEsculturas,
  },
  {
    path: "/ver-escultura/:id",
    component: VerEscultura,
  },
  {
    path: "/agregar-escultores",
    component: CrearEscultores,
  },
  {
    path: "/modificar-escultores/:id",
    component: ModificarEscultores,
  },
  {
    path: "/ver-escultores/:id",
    component: VerEscultores,
  },
  {
    path: "/crear-escultor",
    component: CrearEscultor,
  },
  {
    path: "/modificar-escultor/:id",
    component: ModificarEscultor,
  },
  {
    path: "/ver-escultor/:id",
    component: VerEscultor,
  },
  {
    path: "/agregar-escultura",
    component: AgregarEscultura,
  },
  {
    path: "/:evento/:escultor/qr",
    component: AgregarEscultura,
  },
  {
    path: "/modificar-escultura/:id",
    component: ModificarEscultura,
  },
  {
    path: "/ver-esculturas/:id",
    component: VerEsculturas,
  },

];
