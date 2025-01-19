import { Flex, Heading,Box,Image, Button } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    
  } from '@chakra-ui/react'
import React from "react";
import { Avatar2, Minus, Plush } from "../../constants/media/export";

export const QuestionsContainer = () => {
 

  return (
    <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={10}>
      <Flex display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4}  mx="20px">
        <Heading fontSize="36px" fontWeight={600} textAlign="center">Frequently asked questions</Heading>
        <Heading fontSize="20px" fontWeight={400} color="#475467" textAlign="center">Everything you need to know about the product and billing.</Heading>
      </Flex>
      <Flex w={{base:"80%",md:"786px"}} mt={30} mb="20px">
        <Accordion w="150%" allowToggle>
          <Flex flexDirection="column" alignItems="center" justifyContent="center" gap={6}>
            <AccordionItem w="100%" border="none">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' fontSize="18px" fontWeight={500} flex='1' textAlign='left' w="100%">
                      Is there a free trial available?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize="18px" fontWeight={500} w="100%">
                      Can I change my plan later?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize="18px" fontWeight={500} w="100%">
                      What is your cancellation policy?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize="18px" fontWeight={500} w="100%">
                      Can other info be added to an invoice?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize="18px" fontWeight={500} w="100%">
                      How does billing work?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem w="100%" borderBottom="none">
              {({ isExpanded }) => (
                <>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize="18px" fontWeight={500} w="100%">
                      How do I change my account email?
                    </Box>
                    <Image w="20px" h="20px" src={isExpanded ? Minus : Plush} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Flex>
        </Accordion>      </Flex>
 

 <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={4} my={10} borderRadius={{base:"5px",md:"none"}} w="80%" p="15px" bg="#F9FAFB">
  <Image src={Avatar2}/>
  <Heading textAlign="center" fontSize="20px" fontWeight={600}>Still have questions?</Heading>
  <Heading textAlign="center" fontSize="18px" fontWeight={400} color="#475467">Can’t find the answer you’re looking for? Please chat to our friendly team</Heading>
  <Button width="134px" bg="#E63F3A" height="48px" fontSize="16px" fontWeight={600} color="#FFFFFF">Get in touch</Button>
 </Flex>

    </Flex>
  )
}