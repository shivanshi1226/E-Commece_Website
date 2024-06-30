import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { fetchProductDetails, addToCart } from '../redux/actions';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (!product) return <Box>Loading...</Box>;

  return (
    <Box maxW="container.xl" mx="auto" mt={8}>
      <Box display="flex">
        <Image src={product.image} alt={product.name} maxW="300px" mr={8} />
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>{product.name}</Text>
          <Text mb={4}>{product.description}</Text>
          <Text fontSize="xl" mb={4}>${product.price.toFixed(2)}</Text>
          <Button colorScheme="blue" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;