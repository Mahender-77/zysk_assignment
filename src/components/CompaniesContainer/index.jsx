import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "../../constants/media/export";

export const CompaniesContainer = () => {
  return (
    <Box
      p={{ base: "10px 20px", md: "20px 80px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={8}
      justifyContent="center"
      w="100%"
    >
      <Heading fontSize="16px" color="secondary">
        Join 4,000+ companies already growing
      </Heading>

      <Flex
        direction={{ base: "row", md: "row" }}
        align="center"
        justify="center"
        gap={6}
        wrap="wrap"
        w="90%"
        display="grid"
        justifyItems="center"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }}
      >
        <Image
          src={Icon1}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
        <Image
          src={Icon2}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
        <Image
          src={Icon3}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
        <Image
          src={Icon4}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
        <Image
          src={Icon5}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
        <Image
          src={Icon6}
          w={{ base: "150px", md: "170px" }}
          h="auto"
          objectFit="contain"
        />
      </Flex>
      <Divider borderColor="Gray" borderWidth="0.5px" width="90%" />
    </Box>
  );
};
