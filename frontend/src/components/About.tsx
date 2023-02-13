import * as React from "react"
import {
  VStack,
  Heading,
  Image,
  Container,
  Text
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
        I'm Brando Mora
      </Heading>

      <Container>
        <Text>
          I have been fortunate enough throughout my life to be in a position to pursue my passions in computer science and mathematics. I have had the opportunity to work on many great projects and that's what this website is for.
        </Text>
      </Container>
      
    </VStack>
      
  );
}
