import React from 'react';
import  {Box,Container, Heading,Grid,Button,Link,Image} from "@chakra-ui/react"
import joinGroup from '../assets/joingroup.png';
import ticket from '../assets/ticket.jpg';
import startGroup from '../assets/startgroup.jpg';
export default function ItWorks() {
  return (
    <div>
      <Box>
        <Container maxWidth="container.xl" my="20" >
         <Heading align="center" as="h3" size="lg"pb="2" >
           HOW Meetup works
         </Heading>
         <Box alignItems ="center" maxWidth="700px" mx="auto" pb="10">
           Meet new people who share your interests throurgh onilne and in-person e
           event .It's free to create an account.
         </Box>
         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={joinGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.100" pb="4">
                  Join a Group
                </Box>
              </Link>
            </Heading>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </Box>

          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={ticket} alt="brand" />
            <Heading as="h5" size="md">
              <Link>
                {' '}
                <Box color="blue.100" pb="4">
                  Join a Group
                </Box>{' '}
              </Link>
            </Heading>
            <p>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </p>
          </Box>
          <Box mx="auto" align="center">
            <Image w="100%" boxSize="160px" src={startGroup} alt="brand" />
            <Heading as="h5" size="md">
              <Box color="blue.100" pb="4">
                <Link>Join a Group</Link>
              </Box>
            </Heading>
            <Box fontSize="sm">
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </Box>
          </Box>
        </Grid>
        <Box align="center" mt="16">
          <Button
            _hover={{ opacity: '0.8' }}
            bg="blue.100"
            color="#ffffff"
            fontWeight="normal"
            size="md"
          >
            Join Meetup
          </Button>
        </Box>
        </Container>
      </Box>
    </div>
  )
}