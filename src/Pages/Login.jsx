import LinkButtons from '../Components/LinkButtons';
import { Box, Typography } from '@mui/material';
import { handleFacebookLogin, handleGoogleLogin, handleInstagramLogin } from '../Logic/AuthHanddler.js'
import Header from '../Components/Header.jsx';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

function Login() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <>
      <Header />
      <Box sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '75vh',width: '100vw',bgcolor: '#f5f5f5',padding: 2}}>
        <ThemeProvider theme={theme}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Bienvenidos
        </Typography>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Para empezar, primero debes autenticarte
        </Typography>
        </ThemeProvider>

        <Box sx={{display: 'flex',flexDirection: 'column', gap: 3,maxWidth: '600px',width: '100%',}}>
          <LinkButtons platform="facebook" onClick={handleFacebookLogin} />
          <LinkButtons platform="google" onClick={handleGoogleLogin} />
          <LinkButtons platform="instagram" onClick={handleInstagramLogin} />
        </Box>
      </Box>
    </>
  );
}

export default Login;
