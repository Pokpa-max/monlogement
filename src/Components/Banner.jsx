import React from 'react';
import { Box,Image ,Badge,FormControl ,Input ,Button,Container,Heading,Grid,} from "@chakra-ui/react";
import brandlogo from "../assets/brandlogo.png";
import illustratious from "../assets/illustratious.png"
import image1 from "../assets/images.png";
import image2 from "../assets/image2.gif";
import image3 from "../assets/image2.jpg";
import right from "../assets/right.png";

export default function Banner() {
  return (
    <div>
        <header>
            <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
            <Box><Image boxSize="90px" src={brandlogo} alt="brandlogo"/></Box>
            <Box>
            <Button pr={3} colorScheme="gray.600"fontWeight="sm" variant="link">
               Log in
             </Button>
             <Button colorScheme="gray.600"fontWeight="sm" variant="link">
               Sign up
             </Button>
             </Box>
            </Box>
            </header>

            <Box>
                <Container maxWidth="container.xl">
                <Box d="flex" alignItems="center" py="20"
                 flexDirection={
                     {
                      sm:'column' ,
                      md:'row',
                      lg:'row',
                      xl:'row',
                      base:'column'

                     }
                 }
                 >
                    <Box mr="6">
                        <Heading as="h1" size="2xl">
                            <Box fontWeight="black" > 
                             Drive ini There are so many thing to do in meetup
                            </Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            join a group to meet people , make friends , find suppport 
                            a business ,and explore  your interests ,Thoosands of events 
                            are happening every day , both online and in person!
                      </Box>
                    </Box>
                    <Box>
                        <Image w="100" src={illustratious} alt="illustratious"/>
                    </Box>
                   </Box>
                </Container>
               </Box>
               <Container maxW="container.xl" mt={10}>
                 <Grid templateColumns ={
                     {
                         sm:'repeat(1,1fr)',
                         md:'repeat(2,1fr)',
                         lg:'repeat(2,1fr)',
                         xl:'repeat(2,1fr)',
                         base:'repeat(1,1fr)',


                     }
                 }>
                     <Box>
                         <Image w="100%" borderRadius="1px" src={image1} alt="image1"/>
                         <Button colorScheme="teal" variant="link" mt="5">
                             Explore the outdoors
                             <Image  w="50%" ml="2" src={right} alt="image1"/>
                         </Button>
                     </Box>
                     <Box>
                         <Image w="100%" borderRadius="1px" src={image2} alt="image2"/>
                         <Button colorScheme="teal" variant="link" mt="5">
                             Explore the outdoors
                             <Image  w="50%" ml="2" src={right} alt="image1"/>
                         </Button>
                     </Box>
                     <Box>
                         <Image w="100%" borderRadius="5px" src={image3} alt="image3"/>
                         <Button colorScheme="teal" variant="link" mt="5">
                             Explore the outdoors
                             <Image w="50%" ml="2" src={right} alt="image1"/>
                         </Button>
                     </Box>
                   </Grid>
               </Container>
               <Container maxW="container.xl">
                   <Box 
                     direction="row"
                     display="flex"
                     flexWrap="wrap"
                     justifyContent ="space-between"
                     my="10"
                   >
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Boost your carrer
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Sent your  zen
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Get mooving 
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Home your craft
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Share language + Culture
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                      Read with friends
                       </Badge>
                       <Badge
                       borderRadius="3xl"
                       px={4}
                       py={2}
                       mr="4"
                       textTransform="normal"
                       color="#ffffff"
                       bg="blue.100"

                       >
                       Write together
                       </Badge>
                   </Box>
                 </Container>

                 {/* derniere partie du navbar */}

    <Container maxW="container.xl" mt={20}>
          <Grid      templateColumns = {
              {
                sm:'repeat(1,1fr)',
                md:'repeat(2,1fr)',
                lg:'repeat(2,1fr)',
                xl:'repeat(2,1fr)',
                base:'repeat(1,1fr)',

              }
          } gap={6}>
            <Box>
              <Heading as="h3" size="lg" mb="7">
                Quest ce que tu veut faire ?
              </Heading>
              <Box d="flex" alignItems="center"
                
              >
                <Box flexBasis={'50%'} mr="2">
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'tennis'"
                        type="text"
                      />
                      <Box pos="absolute" top="3" left="2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="#d9d9d9"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
                <Box flexBasis="50%" ml="2">
                  <FormControl id="email">
                    <Box pos="relative">
                      <Input
                        pl={'8'}
                        placeholder="Search for 'tennis'"
                        type="text"
                      />
                      <Box pos="absolute" top="3" left="2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="#d9d9d9"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
              <Button
                _hover={{ opacity: '0.8' }}
                mt="5"
                pt="6"
                pb="6"
                w="100%"
                color="#ffffff"
                bg="red.200"
                fontSize="lg"
              >
                <Box fontWeight="black">Search</Box>
              </Button>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb="7">
                See what’s happening
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Starting soon
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Today
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Tomorrow
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  This Week
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Online
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  In person
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Trending near you
                </Badge>
              </Box>
            </Box>
          </Grid>
        </Container>
          </div>
  )
}
