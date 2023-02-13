import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Nav from "./Nav"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav/>
    <Box textAlign="center" fontSize="xl">
    </Box>
  </ChakraProvider>
)
