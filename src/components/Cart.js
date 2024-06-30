import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button, VStack, HStack, Image } from '@chakra-ui/react';
import { removeFromCart, updateCartItemQuantity } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box maxW="container.xl" mx="auto" mt={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <VStack align="stretch" spacing={4}>
          {cartItems.map(item => (
            <HStack key={item.id} borderWidth={1} p={4} borderRadius="md">
              <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" />
              <VStack align="start" flex={1}>
                <Text fontWeight="bold">{item.name}</Text>
                <Text>${item.price.toFixed(2)}</Text>
              </VStack>
              <HStack>
                <Button size="sm" onClick={() => dispatch(updateCartItemQuantity(item.id, item.quantity - 1))}>-</Button>
                <Text>{item.quantity}</Text>
                <Button size="sm" onClick={() => dispatch(updateCartItemQuantity(item.id, item.quantity + 1))}>+</Button>
              </HStack>
              <Button colorScheme="red" onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>
            </HStack>
          ))}
          <Box borderTopWidth={1} pt={4}>
            <Text fontSize="xl" fontWeight="bold">Total: ${total.toFixed(2)}</Text>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;