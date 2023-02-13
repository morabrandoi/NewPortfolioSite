import * as React from "react"
import {
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react"

type AboutProps = {

}

export default function About(props: AboutProps) {

  return (
    <VStack
      sx={{'scrollMarginTop': '100px'}}
      spacing={50}
    >
      <Heading as='h1'>
        {"<About>"}
      </Heading>
      
      <Image
        borderRadius='50px'
        boxSize='200px'
        objectFit='cover'
        src='/GradPic2.jpg'
        alt='A picture of me, Brando Mora'>
      </Image>

      <Heading as='h2'>
        Hello there
      </Heading>
      
    </VStack>
      
  );
}
