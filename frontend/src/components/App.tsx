import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from "./Nav"
import Body from "./Body"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
    <Body>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </Body>
    
  </ChakraProvider>
)
