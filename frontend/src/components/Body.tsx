import * as React from "react"
import {
  StackDivider,
  VStack,
  useColorModeValue
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
          divider={<StackDivider borderColor={useColorModeValue('black', 'white')} />}
          zIndex={10}
          borderRadius={10}
          backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
          m={8}
          p={8}
        >
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
        </VStack>
  );
}