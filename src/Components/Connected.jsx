import { Box, Image, Container, Heading } from '@chakra-ui/react';
import deviceLeft from '../assets/android.jpg';
import meetupLogo from '../assets/brandlogo.png';
import deviceRight from '../assets/iphone.jpg';

import androidAppstore from '../assets/app-store.jpg';
import iosAppstore from '../assets/google_play.png';

export default function Connected() {
  return (
    <Box my="20">
      <Container maxWidth="container.xl">
        <Box
          display="flex"
          pos="relative"
          justify-content="space-between"
          alignItems="center"
        
        >
          <Box>
            <Image w="260px" src={deviceLeft}></Image>
          </Box>
          <Box pos="relative" mx="auto" align="center">
            <Image w="80px" left="0" src={meetupLogo}></Image>
            <Heading as="h6" size="md" my="7">
              Stay connected. <br /> Download the app.
            </Heading>
            <Box d="flex"
              flexWrap={{
                sm:'wrap',
                md:'nowrap',
                lg:'nowrap',
                xl:'nowrap',
                base:'wrap'
              }} 
            >
              <Image w="180px" p="5" src={androidAppstore}></Image>
              <Image w="180px" h="85" p="5" src={iosAppstore} mt="5"></Image>
            </Box>
          </Box>
          <Box>
            <Image w="260px" right="0" src={deviceRight}></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

