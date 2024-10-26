import { Button, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHub from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';

function LinkButtons({ platform, onClick }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(max-width:900px)');
    let icon, color, label, textColor, hoverColor, id;

    switch (platform) {
        case 'google':
            icon = <GoogleIcon />;
            color = '#fff'; 
            label = 'Continuar con Google';
            textColor = '#000'; 
            hoverColor = '#f5f5f5';
            id = 'google';
            break;
        case 'github':
            icon = <GitHub />;
            color = '#000';
            label = 'Continuar con Github';
            textColor = '#fff';
            hoverColor = '#333';
            id = 'github';
            break;
        default:
            icon = null;
            color = '#000';
            label = 'Prefiero Continuar';
            textColor = '#fff';
            hoverColor = '#333';
            id = 'none';
    }

    return (
        <Button
            id={`login-${id}`}
            variant="contained"
            startIcon={icon}
            onClick={onClick}
            sx={{
                backgroundColor: color,
                color: textColor,
                width: isSmallScreen ? '90%' : isMediumScreen ? '70%' : '50%', // Ajuste de ancho
                margin: '10px 0',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: isSmallScreen ? '14px' : '16px',
                padding: isSmallScreen ? '8px 16px' : '10px 20px',
                border: platform === 'google' ? '1px solid #ddd' : 'none', 
                '&:hover': {
                    backgroundColor: hoverColor,
                },
            }}
        >
            {label}
        </Button>
    );
}

LinkButtons.propTypes = {
    platform: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LinkButtons;