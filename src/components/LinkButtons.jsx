import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PropTypes from 'prop-types';

function LinkButtons({ platform, onClick }) {
    let icon, color, label, textColor, hoverColor;

    switch (platform) {
        case 'facebook':
            icon = <FacebookIcon />;
            color = '#1877F2';
            label = 'Continuar con Facebook';
            textColor = '#fff';
            hoverColor = '#165DB0'; 
            break;
        case 'google':
            icon = <GoogleIcon />;
            color = '#fff'; 
            label = 'Continuar con Google';
            textColor = '#000'; 
            hoverColor = '#f5f5f5'; 
            break;
        case 'github':
            icon = null;
            color = '#000';
            label = 'Continuar con Github';
            textColor = '#fff';
            hoverColor = '#333';
            break;
        default:
            icon = null;
            color = '#000';
            label = 'Prefiero Continuar';
            textColor = '#fff';
            hoverColor = '#333';
    }

    return (
        <Button
            variant="contained"
            startIcon={icon}
            onClick={onClick}
            sx={{
                
                backgroundColor: color,
                color: textColor,
                width: '100%',
                maxWidth: '900px', 
                margin: '10px 0',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '16px',
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


