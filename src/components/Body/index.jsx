// import { Box, Center, Container, Flex ,Heading,Text, VStack} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Banner, FullImage, playBtn } from "../../constants/media/export";

function BodyContent() {
  return (
    <Container maxW="100%" centerContent py={{ base: "3", md: "10" }}>
      <Flex
        alignItems="center"
        justifyContent="center"
        mb={6}
        gap={6}
        flexWrap="wrap"
        borderRadius="full"
        border={{ base: "0.5px solid #E9D7FE", md: "0.5px solid red" }}
        w={{ base: "90%", md: "23.2%" }}
        p={1}
        backgroundColor={{ base: "#F9F5FF", md: "#fdf3f1" }}
      >
        <Tag
          border={{ base: "0.5px solid #E9D7FE", md: "0.5px solid red" }}
          color="red"
          bg={{ base: "#FFFFFF", md: "#fdf3f1" }}
          px={3}
          borderRadius="full"
          fontSize={{ base: "10px", md: "13px" }}
        >
          New feature
        </Tag>
        <Link
          color="red.500"
          fontWeight="medium"
          fontSize={{ base: "13px", md: "sm" }}
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
        fontSize={{ base: "36px", md: "50px" }}
        mb={4}
        fontWeight="bold"
        color="gray.800"
        maxW={{ base: "100%", md: "none" }}
      >
        Beautiful analytics to grow smarter
      </Heading>

      <Text
        fontSize={{ base: "18px", md: "20px" }}
        color="gray.600"
        textAlign="center"
        width={{ base: "100%", md: "45%" }}
        mb={8}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </Text>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column-reverse", md: "row" }}
        gap={4}
        flexWrap="wrap"
      >
        <Button
          variant="outline"
          w={{ base: "343px", md: "114px" }}
          h="48px"
          color="#344054"
          borderWidth="2px"
          borderRadius="40px"
          px={{ base: 28, md: 4 }}
          _hover={{ bg: "violet.500" }}
        >
          <Flex alignItems="center" gap={2}>
            <Image src={playBtn} /> Demo
          </Flex>
        </Button>
        <Button
          w={{ base: "343px", md: "114px" }}
          h="48px"
          colorScheme="red"
          px={{ base: 28, md: 4 }}
          borderRadius="40px"
          _hover={{ bg: "violet.500" }}
        >
          Sign up
        </Button>
      </Flex>

      <Box
        width={{ base: "100%", md: "80%" }}
        height="fit-content"
        overflow="hidden"
        mt={10}
        borderTopRadius={20}
      >
        <Image
          objectFit="cover"
          width="100%"
          src={useBreakpointValue({ base: FullImage, md: Banner })}
          alt="Image"
        />
      </Box>
    </Container>
  );
}

export default BodyContent;
