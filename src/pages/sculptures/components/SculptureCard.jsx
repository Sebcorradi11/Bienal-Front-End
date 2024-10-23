import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SculptureCard = ({ title, image, authorName }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {authorName}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SculptureCard;
