import { VStack, Heading, Avatar } from '@chakra-ui/react';
import { HEADSHOT_FILENAME } from '../../../constants/fileNames';

export default function About() {
  return (
    <VStack sx={{ scrollMarginTop: '1000px' }} spacing={25} zIndex={50}>
      <Avatar width="250px" height="250px" src={`/imgs/${HEADSHOT_FILENAME}`} />

      <Heading size="2xl">
        <b>I&apos;m Brando Mora</b>
      </Heading>
      <Heading size="sm" noOfLines={2}>
        Software Engineer;
        <br />
        Math enthusiast;
      </Heading>
    </VStack>
  );
}
