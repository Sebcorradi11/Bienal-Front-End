import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import PropTypes from 'prop-types';

function LinkButtons({ platform, onClick }) {
    let icon, color, label;

    switch (platform) {
        case 'facebook':
            icon = <FacebookIcon />;
            color = '#3b5998';
            label = 'Continuar con Facebook';
            break;
        case 'google':
            icon = <GoogleIcon />;
            color = '#DB4437';
            label = 'Continuar con Google';
            break;
        case 'instagram':
            icon = <InstagramIcon />;
            color = '#E4405F';
            label = 'Continuar con Instagram';
            break;
        default:
            icon = null;
            color = '#000';
            label = 'Prefiero Continuar';
    }

    return (
        <Button
            variant="contained"
            startIcon={icon}
            onClick={onClick}
            sx={{
                backgroundColor: color,
                color: '#fff',
                width: '100%',
                maxWidth: '300px',
                margin: '10px 0',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                    backgroundColor: `${color}CC`,
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
