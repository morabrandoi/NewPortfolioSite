import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from "./Nav"
import Body from "./Body"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
    <Body/>
  </ChakraProvider>
)
