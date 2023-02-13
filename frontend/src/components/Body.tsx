import * as React from "react"
import {
  StackDivider,
  Card,
  Box,
  VStack,
  CardBody
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
          zIndex={10}
          borderRadius={10}
        >
              <About/>
              <Experience/>
              <Projects/>
              <Contact/>
        </VStack>
  );
}