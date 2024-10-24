import React from 'react';
import { Box, Typography } from '@mui/material';
import HeaderPublic from '../../components/HeaderPublic';
import Footer from '../../components/Footer';
import Predio from './components/Predio';
import Formas from './components/Formas';
import Info1 from './components/Info1';
import Info2 from './components/Info2';

const Home = () => {
    return (
        <Box>
            {/* Header */}
            <HeaderPublic />

            {/* Sección del Predio (banner) */}
            <Predio />

            {/* Sección de formas (SVGs) */}
            <Formas />

            {/* Sección de informacion 1 */}
            <Info1 />

            {/* Sección de informacion 2 */}
            <Info2 />

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Home;
