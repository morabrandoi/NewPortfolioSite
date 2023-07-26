import * as React from 'react';
import { VStack, Container } from '@chakra-ui/react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function Body() {
  return (
    <VStack zIndex={10}>
      <Container maxWidth={1000}>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </VStack>
  );
}
