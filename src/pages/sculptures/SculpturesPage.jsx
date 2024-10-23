import Header from './components/HeaderSculptures';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';
import Info from './components/info'; 
import Info2 from './components/info2'; 
import SculptureList from './components/SculptureList';

function SculpturePage(){
    return(
     <Box>
        <Header />
        <Info />
        <Info2 />
        <SculptureList/>
        <Footer />            
    </Box>

    )
}
export default SculpturePage;