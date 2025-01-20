import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export const SectionContainer = () => {
  return (
    <Box bg="#F9FAFB" p={{ base: "70px", md: "96px" }} mt="60px">
      <Flex
        mb="20px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        textAlign="center"
      >
        <Heading
          fontSize={{ base: "30px", md: "36px" }}
          fontWeight={600}
          color="#101828"
          width={{ base: "120%" }}
        >
          Start your free trial
        </Heading>
        <Heading
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight={400}
          color="#475467"
        >
          Join over 4,000+ startups already growing with Untitled
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          gap="10px"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Button
            bg="#FFFFFF"
            color="#344504"
            border="0.5px solid #344504"
            w={{ base: "343px", md: "129px" }}
            h="48px"
          >
            Learn more
          </Button>
          <Button
            bg="#E63F3A"
            color="#FFFFFF"
            h="48px"
            w={{ base: "343px", md: "129px" }}
          >
            Get started
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
