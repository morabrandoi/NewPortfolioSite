import * as React from "react"
import {
  Flex,
  Box
} from "@chakra-ui/react"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"


// type BodyProps = {
// }

export default function Body() {

  return (
    <Flex direction={'column'} align='center' >
      <About/>
      <Box w='70px' h='1000' bg='red.500' />
      <Experience/>
      <Box w='70px' h='1000' bg='red.500' />
      <Projects/>
      <Box w='70px' h='1000' bg='red.500' />
      <Contact/>
    </Flex>
  );
}