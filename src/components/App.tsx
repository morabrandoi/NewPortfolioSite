import { ChakraProvider, Container } from '@chakra-ui/react';
import Nav from './Nav';
import ParticlesBG from './ParticlesBG';
import theme from './theme';
import Body from './Body/Body';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container zIndex={-1}>
      <ParticlesBG />
    </Container>
    <Nav />
    <Body />
  </ChakraProvider>
);
