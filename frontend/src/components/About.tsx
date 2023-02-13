import * as React from "react"
import {
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"

type AboutProps = {

}

export default function About(props: AboutProps) {

  return (
    <Flex id="About" sx={{'scroll-margin-top': '100px'}} direction="column" alignItems="center">
      <Heading>
        {"<About>"}
      </Heading>
      <Image
        borderRadius='full'
        boxSize='xs'
        objectFit='cover'
        src='/GradPic2.jpg'
        alt='Dan Abramov'>
      </Image>
    </Flex>
      
  );
}
