import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { CompLogo, MenuIcon1, profile } from "../../constants/media/export";

export default function Header() {
  return (
    <Box
      bg="white"
      px="8"
      py="4"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex>
        <Flex w="68%" m="auto" align="center" justifyContent="left" gap="40px">
          <Image src={CompLogo} />

          <Box display={{ base: "none", md: "block" }}>
            <Flex align="center" gap="8">
              <Link
                href="#"
                fontSize="16px"
                fontWeight={600}
                color="#475467"
                _hover={{ color: "blue.500" }}
              >
                Home
              </Link>

              <Menu>
                <MenuButton
                  as={Link}
                  fontSize="16px"
                  fontWeight={600}
                  color="#475467"
                  _hover={{ color: "blue.500" }}
                >
                  Products <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Product 1</MenuItem>
                  <MenuItem>Product 2</MenuItem>
                  <MenuItem>Product 3</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Link}
                  fontSize="16px"
                  fontWeight={600}
                  color="#475467"
                  _hover={{ color: "blue.500" }}
                >
                  Resources <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>Resource 1</MenuItem>
                  <MenuItem>Resource 2</MenuItem>
                  <MenuItem>Resource 3</MenuItem>
                </MenuList>
              </Menu>

              <Link
                href="#"
                fontSize="16px"
                fontWeight={600}
                color="#475467"
                _hover={{ color: "blue.500" }}
              >
                Pricing
              </Link>
            </Flex>
          </Box>
        </Flex>

        <Image
          mr="150px"
          display={{ base: "none", md: "block" }}
          size="md"
          src={profile}
        />

        <Image display={{ base: "block", md: "none" }} src={MenuIcon1} />
      </Flex>
    </Box>
  );
}
