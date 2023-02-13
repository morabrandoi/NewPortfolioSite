import * as React from "react"
import {
  VStack,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react"

type AboutProps = {

}

export default function About(props: AboutProps) {

  return (
    <VStack
      sx={{'scrollMarginTop': '100px'}}
    >
      <Heading>
        {"<About>"}
      </Heading>
      
      <Box m={100}>
        <Image
          borderRadius='50px'
          boxSize='200px'
          objectFit='cover'
          src='/GradPic2.jpg'
          alt='A picture of me, Brando Mora'>
        </Image>
      </Box>
      


    </VStack>
      
  );
}
