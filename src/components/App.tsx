import { ChakraProvider, theme, VStack } from '@chakra-ui/react';
import Nav from './Nav';
import Body from './Body';
import ParticlesBG from './ParticlesBG';

export const App = () => (
  <ChakraProvider theme={theme}>
    <ParticlesBG />
    <Nav />
    <VStack>
      <Body />
    </VStack>
  </ChakraProvider>
);
