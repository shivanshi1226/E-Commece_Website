import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.100" py={4} mt={8}>
      <Text textAlign="center">&copy; 2024 E-commerce Store. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;