import {
  VStack,
  Heading,
  Image,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { HEADSHOT_FILENAME } from '../../constants/constants';

export default function About() {
  return (
    <Box
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={8}
      id="About"
      sx={{ scrollMarginTop: '1000px' }}
    >
      {/* <Heading size={'lg'}>{'<About>'}</Heading> */}
      <VStack sx={{ scrollMarginTop: '1000px' }} spacing={25} zIndex={50}>
        <Image
          borderRadius="50px"
          boxSize="200px"
          objectFit="cover"
          src={`/imgs/${HEADSHOT_FILENAME}`}
          alt="A picture of me, Brando Mora."
        ></Image>

        <Heading size="2xl">I&apos;m Brando Mora</Heading>
        <Heading size="sm" noOfLines={2}>
          Software Engineer;
          <br />
          Math enthusiast;
        </Heading>
      </VStack>
    </Box>
  );
}
