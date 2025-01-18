import { Button, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
function RightContent() {
  return (
    <Button variant="ghost" alignItems="center" _hover={{ background: "none" }}>
      <Box
        display={{ base: "none", md: "flex" }}
        as="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNN58XFDLxdqtwwWRSE924NjtuSryXFGxjg&s"
        alt="Profile"
        boxSize="50px"
        borderRadius="full"
        border="2px solid"
        objectFit="cover"
      />
      <Box display={{ base: "flex", md: "none" }}>
        <HamburgerIcon boxSize={{ base: "25px", md: "none" }} />
      </Box>
    </Button>
  );
}

export default RightContent;
