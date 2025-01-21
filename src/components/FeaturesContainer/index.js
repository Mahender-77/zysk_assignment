import { Flex, Heading, Text, Image, Box, Grid } from "@chakra-ui/react";
import React from "react";
import {
  chart,
  chartMsg,
  command,
  emoji,
  message,
  thunder,
} from "../../constants/media/export";

export const FeaturesContainer = () => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={{ base: "none", md: "20px" }}
      mt="30px"
    >
      <Flex
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
      >
        <Flex
          display="flex"
          w={{base:"93%",md:"80%"}}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          px={32}

         
        >
          <Text color="#E63F3A" fontSize="14px">Features</Text>
          <Heading
            textAlign="center"
            fontSize={{ base: "30px", md: "36px" }}
            width={{ base: "300%", md: "100%" }}
          >
            Analytics that feels like it's from the future
          </Heading>
          <Text
            color="secondary"
            fontSize={{ base: "15px", md: "18px" }}
            textAlign="center"
            width={{ base: "250%", md: "70%" }}
          >
            {" "}
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Text>
        </Flex>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          w="80%"
          gap={6}
          py={{ base: "none", md: "60px" }}
        >
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px">
              {" "}
              <Image src={chartMsg} />
            </Box>
            <Heading fontSize="20px">Share team inboxs</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px" >
              {" "}
              <Image src={thunder} />
            </Box>
            <Heading fontSize="20px">Deliver instant answers</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px">
              {" "}
              <Image src={chart} />
            </Box>
            <Heading fontSize="20px">Manage your team with report</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px">
              {" "}
              <Image src={emoji} />
            </Box>
            <Heading fontSize="20px">Contact with customers</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px">
              {" "}
              <Image src={command} />
            </Box>
            <Heading fontSize="20px">Connect the tools you already use</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{base:"6",md:"2"}}
          >
            <Box border="0.5px solid Gray" p={1} borderRadius="5px">
              {" "}
              <Image src={message} />
            </Box>
            <Heading fontSize="20px">Our pepole make the diffrence</Heading>

            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="secondary"
              width="80%"
              textAlign="center"
            >
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};
