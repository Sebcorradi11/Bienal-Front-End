import React from 'react';
import { Box, Typography } from '@mui/material';
import titleRectangle from '../../../assets/home/Rectangle-Title.svg'; // Importa el SVG del rectángulo debajo del título
import subtitleRectangle from '../../../assets/home/Rectangle-Subtitle.svg'; // Importa el SVG para el subtítulo
import backgroundImage from '../../../assets/home/info2.webp'; // Imagen de fondo

const Info2 = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '60px 30px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Título con SVG debajo */}
            <Box sx={{ position: 'relative', mb: 5, textAlign: 'left' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}> {/* Título más grande */}
                    Resistencia, la Ciudad de las Esculturas
                </Typography>
                {/* SVG debajo del título */}
                <Box
                    component="img"
                    src={titleRectangle}
                    alt="Decorative Rectangle"
                    sx={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '150px', // Ajuste del tamaño del SVG
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
                        marginRight: '20px',
                        width: '30px',
                        height: '50px',
                    }}
                />
                <Typography variant="h5" sx={{ color: '#AAAAAA', fontWeight: 'bold' }}> {/* Subtítulo más grande */}
                    De repente, en un lugar común, te encontrás con el arte, lo tocás, lo sentís,
                    lo vivís, te maravillás… y así, unas 600 veces más.
                </Typography>
            </Box>

            {/* Contenedor principal que divide el texto en 2 partes */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 6, // Mayor separación entre las columnas
                    minHeight: '70vh',
                }}
            >
                {/* Primera sección de texto (Información general) */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column', // Los textos están en columna
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h5" sx={{ lineHeight: '2', fontSize: '22px' }}> {/* Texto más grande */}
                        América es continente de grandes escultores y escenario de una identidad
                        cultural, que ubica al arte en espacios naturales, junto a la vida diaria
                        de las urbes. Argentina, si bien con disímiles acentos, no es una excepción
                        a esa corriente. Está el Chaco, como ejemplo paradigmático en esta nueva
                        concepción. Y dentro de esta tierra, está su capital, Resistencia,
                        mostrando un espíritu singular para dar expresión al lenguaje del arte.
                    </Typography>
                    <Typography variant="h5" sx={{ lineHeight: '2', fontSize: '22px', mt: 2 }}>
                        Resistencia, la Ciudad de las Esculturas, es la capital de la provincia del
                        Chaco, ubicada al norte de la República Argentina. Sus espacios abiertos
                        ofrecen la generosidad de una vegetación abundante y el arte al alcance de
                        todos.
                    </Typography>
                </Box>

                {/* Segunda sección (Enumeración con puntos clave) */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Punto 1 */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                backgroundColor: '#fff', // Fondo blanco
                                color: '#000', // Texto en negro
                                borderRadius: '50%', // Hacer el círculo perfectamente redondo
                                width: '70px', // Más grande
                                height: '70px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            1
                        </Typography>
                        <Box sx={{ ml: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '22px' }}>
                                Capital Nacional de las Esculturas
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                La ciudad de Resistencia fue declarada Capital Nacional de las
                                Esculturas por el Congreso de la Nación en octubre de 2006. – Ley
                                26.157 –.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Punto 2 */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                backgroundColor: '#fff', // Fondo blanco
                                color: '#000', // Texto en negro
                                borderRadius: '50%', // Hacer el círculo perfectamente redondo
                                width: '70px', // Más grande
                                height: '70px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            2
                        </Typography>
                        <Box sx={{ ml: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '22px' }}>
                                Capital Mercosur de las Esculturas
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                En Octubre de 2010, el Parlamento del Mercosur Declara a la ciudad
                                de Resistencia, Chaco, República Argentina, “Capital Mercosur De Las
                                Esculturas”.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Info2;
