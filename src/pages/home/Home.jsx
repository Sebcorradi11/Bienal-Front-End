import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from '../../components/Footer';
import Predio from './components/predio';
import Formas from './components/formas';
import Info1 from './components/Info1';
import Info2 from './components/Info2';

const Home = () => {
    return (
        <Box>
            {/* Header */}
            <Header />

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
