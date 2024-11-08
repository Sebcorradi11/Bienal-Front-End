import React from 'react';
import Footer from '../../components/Footer';
import HeaderPublic from '../../components/HeaderPublic';
import SculptorVote from './components/SculptorVote';
import { useParams } from 'react-router-dom';

const VotesPage = () => {
    const { id_escultor, id_evento, token } = useParams();
    console.log(id_escultor, id_evento, token)
    return (
        <>  
            <HeaderPublic />
            <SculptorVote evento={id_evento} id_escultor={id_escultor}/>
            <Footer />
        </>
    );
};

export default VotesPage;