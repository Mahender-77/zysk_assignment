import React from "react";
import { HStack } from "@chakra-ui/react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
function Navbar() {
  return (
    <HStack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      pr={{ base: "none", md: "100px" }}
      pl={{ base: "none", md: "90px" }}
      borderBottom="1px solid LightGray"
    >
      <LeftContent />
      <RightContent />
    </HStack>
  );
}

export default Navbar;
