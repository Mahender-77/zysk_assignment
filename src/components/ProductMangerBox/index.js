import React from "react";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { avatar, productmangerlogo } from "../../constants/media/export";
export const ProductMangerBox = () => {
  return (
    <Box
      bg="#F9FAFB"
      mt={{ base: "40px", md: "none" }}
      border="0.5px solid #F9FAFB"
    >
      <Box w={{ base: "100%", md: "80%" }} margin="90px auto">
        <Flex
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={8}
        >
          <Image width="140.83px" src={productmangerlogo} />
          <Heading
            textAlign="center"
            fontSize={{ base: "35px", md: "48px" }}
            m={{ base: "5px", md: "none" }}
            fontWeight={500}
          >
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </Heading>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Image src={avatar} />
            <Heading textAlign="center" fontSize="18px" fontWeight={600}>
              Candice Wu
            </Heading>
            <Heading
              textAlign="center"
              fontSize="16px"
              color="#475467"
              fontWeight={400}
            >
              Product Manger, sisyphus{" "}
            </Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
