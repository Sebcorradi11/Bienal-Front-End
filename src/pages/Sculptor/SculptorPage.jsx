// SculptorPage.jsx
import React from 'react';
import SculptorList from './components/SculptorList';
import Footer from '../../components/Footer'; // Si ya tienes el footer creado
import HeaderPublic from '../../components/HeaderPublic';
import Info from './components/Info';
import Info2 from './components/Info2';

const SculptorPage = () => {
    return (
        <>
            <HeaderPublic />
            <Info />
            <Info2 />
            <SculptorList />
            <Footer />
        </>
    );
};

export default SculptorPage;
