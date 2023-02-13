import * as React from "react"
import {
  ChakraProvider,
  theme,
  VStack,
} from "@chakra-ui/react"
import Nav from "./Nav"
import Body from "./Body"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
    <VStack>
      <Body/>
    </VStack>
  </ChakraProvider>
)
