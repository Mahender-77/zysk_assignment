// import { Box, Center, Container, Flex ,Heading,Text, VStack} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Banner, playBtn } from "../../constants/media/export";

function BodyContent() {
  return (
    <Container maxW="100%" centerContent py={10}>
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
          _hover={{ textDecoration: "none" }}
        >
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
        maxW={{ base: "80%", md: "none" }}
      >
        Beautiful analytics to grow smarter
      </Heading>

      <Text
        fontSize={{ base: "18px", md: "20px" }}
        color="gray.600"
        textAlign="center"
        width={{ base: "80%", md: "45%" }}
        mb={8}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </Text>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "row", md: "row", sm: "column-reverse" }}
        gap={4}
        flexWrap="wrap"
      >
        <Button
          variant="outline"
          size="lg"
          colorScheme="gray"
          borderWidth="2px"
          borderRadius="40px"
          px={{ base: 28, md: 6 }}
          _hover={{ bg: "violet.500" }}
        >
          <Flex alignItems="center" gap={2}>
            <Image src={playBtn} /> Demo
          </Flex>
        </Button>
        <Button
          size="lg"
          colorScheme="red"
          px={{ base: 28, md: 6 }}
          borderRadius="40px"
          _hover={{ bg: "violet.500" }}
        >
          Sign up
        </Button>
      </Flex>

      <Box
        width="80%"
        height="fit-content"
        overflow="hidden"
        mt={10}
        borderTopRadius={20}
      >
        <Image objectFit="cover" width="100%" src={Banner} alt="Image" />
      </Box>
      <Divider borderColor="Gray" borderWidth="0.5px" mt="80px" width="80%" />
    </Container>
  );
}

export default BodyContent;