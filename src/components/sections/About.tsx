import {
  VStack,
  Heading,
  Image,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

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
      <Heading size={'lg'}>{'<About>'}</Heading>
      <VStack sx={{ scrollMarginTop: '1000px' }} spacing={50} zIndex={50}>
        <Image
          borderRadius="50px"
          boxSize="200px"
          objectFit="cover"
          src="/imgs/GradPic2.jpg"
          alt="A picture of me, Brando Mora"
        ></Image>

        <Heading as="h2">I&apos;m Brando Mora</Heading>

        <Text>
          I have been fortunate enough throughout my life to be in a position to
          pursue my passions in computer science and mathematics. I have had the
          opportunity to work on many great projects and that&apos;s what this
          website is for.
        </Text>
      </VStack>
    </Box>
  );
}
