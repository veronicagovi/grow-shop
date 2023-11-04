import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem,  } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex,Box,Spacer,Image } from '@chakra-ui/react';


const NavBar = () => {
  return (
    <div>
      
      <Flex>
  <Box p='4' >
     <Image src="/imagenes/logo.jpg" alt="Logo" boxSize="100px" borderRadius="full" />
  </Box>
  <Spacer />
  <Menu>
  <MenuButton 
            as={Button} 
            rightIcon={<ChevronDownIcon />} 
            width="1000px" 
            pl="4" 
            pr="4" 
            color="green.400" 
            bg="black"
             
          >
    CATEGORIAS
  </MenuButton>
  <MenuList>
  <MenuItem _hover={{ bg: 'green.400', color: 'white' }}>Download</MenuItem>
            <MenuItem _hover={{ bg: 'green.400', color: 'white' }}>Create a Copy</MenuItem>
            <MenuItem _hover={{ bg: 'green.400', color: 'white' }}>Mark as Draft</MenuItem>
            <MenuItem _hover={{ bg: 'green.400', color: 'white' }}>Delete</MenuItem>
            <MenuItem _hover={{ bg: 'green.400', color: 'white' }}>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    



    <Spacer/>





  <Box p='4'>
  <CartWidget/>
  </Box>
</Flex>
    
        
    </div>
    
  )
}

export default NavBar