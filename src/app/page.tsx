import { Box, Button, Text, VStack, Heading, Container } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="black" px={6}>
      <Container maxW="lg" textAlign="center" p={8} borderRadius="xl" boxShadow="xl" bg="black" border={'1px solid gray.900'}>
        <VStack spacing={6}>
          <Heading size="3xl" color="white" fontWeight="bold">Next.js</Heading>
          <Text fontSize="md" color="gray.300" maxW="sm">
            A sleek and aesthetic landing page using Chakra UI with a modern touch.
          </Text>
          <a href="https://github.com/Kunal89204"><Button size="md" variant="outline" borderColor="gray.900" color="white" _hover={{ bg: "gray.900" }}>Explore</Button></a>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;