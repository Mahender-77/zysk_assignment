import { Box, Button, Flex, Heading, Text, Image, Stack, Link, Avatar } from "@chakra-ui/react";
import { arrow, Avround1, Avround2, Avround3, Image1, Image2, Image3 } from "../../constants/media/export";

export const BlogContainer=()=>{
return (
    <Box maxW="1200px" mx="auto" p="8" position="relative" mb={40}>
   
    <Box mb="8">
      <Text color="#E63F3A" fontSize="16px" fontWeight={600} mb="2">
        Our blog
      </Text>
      <Heading mb="2" color="#101828" fontSize="36px" fontWeight={600}>
        Lastest blog posts
      </Heading>
      <Text color="#475467" fontSize="20px" fontWeight={400}>
        Tool and strategies modern teams need to help their companies grow.
      </Text>
    </Box>

      <Flex display={{base:"grid",md:"flex"}} justify="space-between" align="flex-start" gap={{base:"32px",md:"8"}} >
     
          <Box
        
            maxW="sm"
            overflow="hidden"
          >
            <Image h="240px" src={Image1} objectFit="cover" />

            <Box pt={6}>
              <Text fontSize="15px" color="#E63F3A" fontWeight={600} mb="2">
              Design
              </Text>
              <Flex  justifyContent="space-between" alignItems="center" mb="2">
                <Heading as="h3" size="24px" fontWeight={600}>
                UX review presentations
                </Heading>
             <Image src={arrow}/>
              </Flex>
              <Text fontSize="sm" color="gray.600" mb="4">
              How do you create compelling presentations that wow your colleagues and impress your managers?
              </Text>
              <Flex align="center" mt="4" gap={4}>
                <Image src={Avround1}/>
                <Box>
                  <Text fontWeight="bold" fontSize="sm">
             Olivia Raye   
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                  20 Jan 2024
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
     
            maxW="sm"
            overflow="hidden"
          >
            <Image h="240px" src={Image2} objectFit="cover" />

            <Box pt="6">
              <Text fontSize="15px" color="#E63F3A" fontWeight={600} mb="2">
              Product
              </Text>
              <Flex  justifyContent="space-between" alignItems="center" mb="2">
                <Heading as="h3" size="24p" fontWeight={600}>
                Migrating to Linear 101
                </Heading>
             <Image src={arrow}/>
              </Flex>
              <Text fontSize="sm" color="gray.600" mb="4">
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.
              </Text>
              <Flex align="center" mt="4" gap={4}>
                <Image src={Avround2}/>
                <Box>
                  <Text fontWeight="bold" fontSize="sm">
                  Phoenix Baker   
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                  19 Jan 2024
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
        
            maxW="sm"
            overflow="hidden"
          >
            <Image h="240px" src={Image3} objectFit="cover" />

            <Box pt="6">
              <Text fontSize="15px" color="#E63F3A" fontWeight={600} mb="2">
           Software Engineering 
              </Text>
              <Flex  justifyContent="space-between" alignItems="center" mb="2">
                <Heading as="h3" size="24p" fontWeight={600}>
                Building your API stack
                </Heading>
             <Image src={arrow}/>
              </Flex>
              <Text fontSize="sm" color="gray.600" mb="4">
              The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them            </Text>
              <Flex align="center" mt="4" gap={4}>
                <Image src={Avround3}/>
                <Box>
                  <Text fontWeight="bold" fontSize="sm">
          Lana steiner   
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                  18 Jan 2024
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
   
      </Flex>

  
    <Flex  justify={{base:"center", md:"flex-end"}} mt="8"  position="absolute" w={{base:"80%",md:"none"}} top={{base:"none",md:"0"}} right={{base:"none",md:"0"}} >
      <Button bg="#E63F3A" w={{base:"343px",md:"148px"}} color="#FFFFFF"  >
        View all posts
      </Button>
    </Flex>  </Box>
)
}