import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

const SculptureCard = ({ title, image, authorName }) => {
    return (
        <Card sx={{ position: 'relative',borderRadius: '16px', overflow: 'hidden', width: '300px', height:'400px',boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)',}}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ 
                    height: '70%', 
                    objectFit: 'cover' 
                }}
            />
            <Box sx={{position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius:'16px',backgroundColor: 'black', padding: '8px', color: 'white', width: '100%', boxSizing: 'border-box',}}>
                <Typography variant="h6" sx={{ fontStyle: 'italic' }}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {authorName}
                </Typography>
            </Box>
        </Card>
    );
};

export default SculptureCard;