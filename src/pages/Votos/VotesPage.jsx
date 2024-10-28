import React from 'react';
import Footer from '../../components/Footer';
import HeaderPublic from '../../components/HeaderPublic';
import SculptorVote from './components/SculptorVote';


const VotesPage = () => {
    return (
        <>  
            <HeaderPublic />
            <SculptorVote />
            <Footer />
        </>
    );
};

export default VotesPage;