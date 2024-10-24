import Footer from '../../components/Footer'; // Si ya tienes el footer creado
import HeaderPublic from '../../components/HeaderPublic';
import Info1 from './components/info1';
import EventosPasados from './components/EventosPasados';
import EventosFuturos from './components/EventosFuturos';
import EventoActual from './components/EventoActual';


const SculptorPage = () => {
    return (
        <>  
            <HeaderPublic />
            <Info1 />
            <EventosPasados />
            <EventoActual />
            <EventosFuturos />
            <Footer />
        </>
    );
};

export default SculptorPage;