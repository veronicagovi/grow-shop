import React from 'react'
import { Badge, Flex, Box } from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md';

const CartWidget = () => {
  return (
    <Flex alignItems="center">
      <Box as={MdShoppingCart} boxSize="50px" color="green" mr={2} />
      <Badge colorScheme='green'>3</Badge>
    </Flex>
  );
}


export default CartWidget