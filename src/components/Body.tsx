import { VStack } from '@chakra-ui/react';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function Body() {
  return (
    <VStack
      zIndex={1}
      marginLeft={'auto'}
      marginRight={'auto'}
      width={'calc(max(350px, 60vw))'}
    >
      <About />
      <Experience />
      <Projects />
      <Contact />
    </VStack>
  );
}
