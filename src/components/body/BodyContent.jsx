// import { Box, Center, Container, Flex ,Heading,Text, VStack} from "@chakra-ui/react";
import { Box, Button, Container, Flex, Heading, Text, Link, Tag, Image } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import React from "react";


function BodyContent(){
    return (

        <Container maxW="100%" centerContent py={10}    >
        <Flex
          alignItems="center"
          justifyContent="center"
          mb={6}
          gap={2}
          flexWrap="wrap"
           borderRadius="full" 
           border="0.5px solid red"
           p={1}
           backgroundColor="#fdf3f1"
        >
          <Tag
            colorScheme="red"
            variant="outline"
            px={3}
            borderRadius="full"
            fontSize="13px"
          >
            New feature
          </Tag>
          <Link
            color="red.500"
            fontWeight="medium"
            fontSize="sm"
            display="flex"
            alignItems="center"
            _hover={{textDecoration:"none"}}          >
            Check out the team dashboard <ArrowForwardIcon ml={1} />
          </Link>
        </Flex>
  
    
        <Heading
          as="h1"
          textAlign="center"
          size="2xl"
          mb={4}
          fontWeight="bold"
          color="gray.800"
          maxW={{base:"70%",md:"none"}}
        >
          Beautiful analytics to grow smarter
        </Heading>
  
        {/* Subtext */}
        <Text
          fontSize="lg"
          color="gray.600"
          textAlign="center"
         maxW={{base:"70%",md:"40%"}} 
          mb={8}
          
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </Text>
  
      
        <Flex alignItems="center" justifyContent="center" flexDirection={{base:"column",md:"row"}}  gap={4} flexWrap="wrap">
          <Button
            variant="outline"
            size="lg"
           
            colorScheme="gray"
            borderWidth="2px"
         
           
            px={{base:28,md:6}}
          >
            <Flex alignItems="center" gap={2}>
              <ArrowForwardIcon />
              Demo
            </Flex>
          </Button>
          <Button size="lg" colorScheme="red" px={{base:28,md:6}}>
            Sign up
          </Button>
        </Flex>

        <Box width="80%" height="600px" overflow="hidden" mt={10} borderTopRadius={20}>
  <Image 
    objectFit="cover" 
    width="100%"
    src="https://img.freepik.com/free-vector/chatbot-technology-isometric-icons-interface-set_107791-140.jpg?t=st=1737189750~exp=1737193350~hmac=5e89e2d0afc6e0ba64d81512f61b2100396afd17e75b960334c2babfd1528fe5&w=2000" 
    alt="Image" 
  />
</Box>

      </Container>


    )
}

export default BodyContent