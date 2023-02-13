import * as React from "react"
import {
  StackDivider,
  VStack
} from "@chakra-ui/react"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"


// type BodyProps = {
// }

export default function Body() {

  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
    >
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </VStack>
  );
}