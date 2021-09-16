
import './App.css';
import {Box,Image} from '@chakra-ui/react'
import Banner from './Components/Banner';
import Connected from './Components/Connected';
import Footerbottom from './Components/Footerbottom';
import ItWorks from './Components/ItWorks';
import Popular from './Components/Popular';
import Stories from './Components/Stories';
import UpcommingMeets from './Components/UpcommingMeets';

import imageBg from './assets/bg.svg';


function App() {
  return (
    <div>   
      <Box position="absolute" left="0" top="0" right="0">
        <Banner />
        <ItWorks />
        <UpcommingMeets />
        <Popular />
        <Connected />
        <Stories />
        <Footerbottom />
      </Box>
      <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    
    </div>
  );
}

export default App;
