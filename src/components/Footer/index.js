import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CompLogo } from "../../constants/media/export";

export const Footer = () => {
  return (
    <Box bg="white" py="10" px="8">
      <Flex
        pl="15px"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        width="80%"
        gap="5px"
      >
        <Flex
          width="100%"
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
          {[
            {
              title: "Product",
              links: [
                "Overview",
                "Features",
                { text: "Solutions", badge: "New" },
                "Tutorials",
                "Pricing",
                "Releases",
              ],
            },
            {
              title: "Company",
              links: [
                "About us",
                "Careers",
                "Press",
                "News",
                "Media kit",
                "Contact",
              ],
            },
            {
              title: "Resources",
              links: [
                "Blog",
                "Newsletter",
                "Events",
                "Help centre",
                "Tutorials",
                "Support",
              ],
            },
            {
              title: "Use cases",
              links: [
                "Startups",
                "Enterprise",
                "Government",
                "SaaS centre",
                "Marketplaces",
                "Ecommerce",
              ],
            },
            {
              title: "Social",
              links: [
                "Twitter",
                "LinkedIn",
                "Facebook",
                "GitHub",
                "AngelList",
                "Dribbble",
              ],
            },
            {
              title: "Legal",
              links: [
                "Terms",
                "Privacy",
                "Cookies",
                "Licenses",
                "Settings",
                "Contact",
              ],
            },
          ].map((column, index) => (
            <Box
              key={index}
              width={["45%", "45%", "auto"]}
              minW={["140px", "180px"]}
              p="2"
            >
              <Heading
                as="h5"
                size="14px"
                mb="4"
                fontWeight={600}
                color="#667085"
              >
                {column.title}
              </Heading>
              <Stack spacing="2">
                {column.links.map((link, idx) =>
                  typeof link === "string" ? (
                    <Link
                      key={idx}
                      href="#"
                      fontSize="16px"
                      fontWeight={600}
                      color="#475467"
                      _hover={{ color: "blue.500" }}
                    >
                      {link}
                    </Link>
                  ) : (
                    <Flex key={idx} align="center" gap="2">
                      <Link
                        href="#"
                        fontSize="16px"
                        fontWeight={600}
                        color="#475467"
                        _hover={{ color: "blue.500" }}
                      >
                        {link.text}
                      </Link>
                      {link.badge && (
                        <Badge colorScheme="green" fontSize="0.7em">
                          {link.badge}
                        </Badge>
                      )}
                    </Flex>
                  )
                )}
              </Stack>
            </Box>
          ))}
        </Flex>
      </Flex>{" "}
      <Divider my="8" />
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        ml={{ base: "none", md: "14%" }}
        flexWrap="wrap"
        gap="4"
      >
        <Image src={CompLogo} />
        <Text fontSize="16px" color="#667085" fontWeight={400}>
          © 2077 zysktechnologies. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
