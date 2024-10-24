import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const EventoCard = ({ title, date, image }) => {
    return (
        <Card sx={{}}>
            <CardMedia
                component="img"
                height="500"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {date}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EventoCard;
