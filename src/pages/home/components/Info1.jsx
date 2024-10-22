import React from 'react';
import { Box, Typography } from '@mui/material';
import titleRectangle from '../../../assets/home/Rectangle-Title.svg'; // Importa el SVG del rectángulo debajo del título
import subtitleRectangle from '../../../assets/home/Rectangle-Subtitle.svg'; // Importa el SVG para el subtítulo

const Info1 = () => {
    return (
        <Box sx={{ backgroundColor: '#000', color: 'white', padding: '40px 20px' }}>
            {/* Título con SVG debajo */}
            <Box sx={{ position: 'relative', mb: 2, textAlign: 'left' }}>
                <Typography 
                    variant="h3" 
                    sx={{ fontWeight: 'bold', mb: 2, marginBottom: '2rem', fontSize: '2.5rem' }}
                >
                    Los Concursos de Escultura
                </Typography>
                {/* SVG debajo del título */}
                <Box
                    component="img"
                    src={titleRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        position: 'absolute',
                        bottom: '-10px', // Ajusta la posición del SVG
                        left: 0,
                        width: '120px', // Ajusta el tamaño del SVG según sea necesario
                    }}
                />
            </Box>

            {/* Subtítulo con SVG a la izquierda */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                {/* SVG a la izquierda del subtítulo */}
                <Box
                    component="img"
                    src={subtitleRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        marginRight: '16px', // Espacio entre el SVG y el subtítulo
                        width: '20px', // Ajusta el tamaño del SVG según sea necesario
                        height: '40px', // Ajusta el tamaño según la altura del subtítulo
                    }}
                />
                <Typography 
                    variant="h6" 
                    sx={{ fontWeight: 'bold', fontSize: '2rem' }}
                >
                    Proveedores inagotables de un Patrimonio cada vez mayor
                </Typography>
            </Box>

            {/* Contenedor principal que divide el texto en 3 partes */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                {/* Primera columna de texto */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ lineHeight: '1.8', fontStyle: 'italic' }}>
                        Desde el Primer Concurso de Escultura en Madera en la Plaza Central, en 1988, 
                        hasta las Bienales internacionales en la actualidad, El Gobierno de la Provincia 
                        del Chaco y la Fundación Urunday trabajan mancomunadamente para hacer de cada Bienal 
                        una verdadera celebración de la identidad de los chaqueños.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: '1.8', mt: 2 , fontStyle: 'italic' }}>
                        Estos certámenes convocan a prestigiosos escultores del mundo que, a cielo abierto 
                        y ante miles de espectadores, crean una obra original e inédita.
                    </Typography>
                </Box>

                {/* Segunda columna de texto */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ lineHeight: '1.8' , fontStyle: 'italic' }}>
                        Las obras se realizan en distintos materiales no perecederos y luego son integradas 
                        al espacio público, en veredas, bulevares, parques y plazas de la ciudad, enriqueciendo 
                        un patrimonio cultural sin precedentes y transformando a Resistencia en un moderno y único 
                        museo de arte al aire libre.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: '1.8', mt: 2 , fontStyle: 'italic' }}>
                        Los concursos escultóricos se tornaron rápidamente en una fiesta popular de magnitud 
                        impensada. Miles de visitantes llegan desde los más diversos puntos del país y del mundo, 
                        transformando el Predio de las Bienales en un suceso cultural y social que reúne artistas y 
                        pueblo en un mismo espacio de intercambio pluricultural.
                    </Typography>
                </Box>

                {/* Tercera columna de texto */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ lineHeight: '1.8', fontStyle: 'italic' }}>
                        Bienales en un suceso cultural y social que reúne artistas y pueblo en un mismo espacio 
                        de intercambio pluricultural.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: '1.8', mt: 2, fontStyle: 'italic' }}>
                        La trascendencia alcanzada por las Bienales ha logrado insertar a Resistencia en los 
                        circuitos internacionales de escultura y posicionarla como una referencia internacional 
                        del arte y la cultura.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Info1;
