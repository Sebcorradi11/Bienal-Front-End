// SculptorPage.jsx
import React from 'react';
import SculptorList from '../Sculptor/components/SculptorList';
import Footer from '../../components/Footer'; // Si ya tienes el footer creado
import HeaderPublic from '../../components/HeaderPublic';
import Info from '../Sculptor/components/Info';
import Info2 from '../Sculptor/components/Info2';

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
