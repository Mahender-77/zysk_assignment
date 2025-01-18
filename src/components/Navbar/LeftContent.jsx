import { Flex ,Image ,Box, List, ListItem} from "@chakra-ui/react"
import React from "react"
function LeftContent(){
    return (
        <Flex align="center" justify="space-between" gap={4}  p={4} h={{base:"60px",md:"80px"}}>
   
        <Box boxSize="90px" mr="20px">
          <Image 
            src="https://zysk.tech/wp-content/uploads/2020/12/zysk-logo.png" 
            alt="Logo" 
            boxSize={{base:"80%",md:"100%"}} 
            objectFit="contain" 
          />
        </Box>
      
   
        <List display={{base:"none",md:'flex'}} gap={10} m={0} p={0} color="  #404040" fontWeight="bold" fontSize={18} >
      
            <ListItem listStyleType="none">
           Home
            </ListItem>
            <ListItem listStyleType="none">
           Products
            </ListItem>
            <ListItem listStyleType="none">
        Resources
            </ListItem>
            <ListItem listStyleType="none">
         Pricing
            </ListItem>
       
        </List>
      </Flex>
    
    )
}
export default LeftContent