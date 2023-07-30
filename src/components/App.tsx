import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import Nav from './Nav';
import ParticlesBG from './ParticlesBG';
import Body from './Body';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container zIndex={-1}>
      <ParticlesBG />
    </Container>
    <Nav />
    <Body />
  </ChakraProvider>
);
