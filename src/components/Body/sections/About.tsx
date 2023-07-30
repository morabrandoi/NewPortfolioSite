import { VStack, Heading, Image } from '@chakra-ui/react';
import { HEADSHOT_FILENAME } from '../../../constants/fileNames';
import './styles.scss';

export default function About() {
  return (
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
  );
}
