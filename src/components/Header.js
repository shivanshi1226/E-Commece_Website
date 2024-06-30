import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.xl" mx="auto" alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">E-commerce Store</Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" mr={4}>Home</Link>
          <Link as={RouterLink} to="/products" mr={4}>Products</Link>
          <Link as={RouterLink} to="/cart" mr={4}>Cart</Link>
          <Link as={RouterLink} to="/login">Login</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;