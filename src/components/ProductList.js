import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Image, Text, Link, Button } from '@chakra-ui/react';
import { fetchProducts, addToCart } from '../redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box maxW="container.xl" mx="auto" mt={8}>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {products.map(product => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Text fontWeight="bold" mb={2}>{product.name}</Text>
              <Text mb={2}>${product.price.toFixed(2)}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500" mb={2} display="block">
                View Details
              </Link>
              <Button colorScheme="blue" onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;