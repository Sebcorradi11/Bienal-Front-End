import { Typography } from '@mui/material';
import '../Styles/Header.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
function Header(){
   let theme = createTheme();
   theme = responsiveFontSizes(theme);
   return(
    <header>
    <ThemeProvider theme={theme}>
      <Typography variant = "h5" sx={{ mb: 3 }}>
      Bienal Internacional de Esculturas de Chaco
      </Typography>
      </ThemeProvider>
  </header>
   )
}
export default Header;