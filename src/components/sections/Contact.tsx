import { Heading, Box, useColorModeValue } from '@chakra-ui/react';
import './styles.scss';

export default function Contact() {
  return (
    <Box
      className="section"
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={8}
      id="Contact"
      sx={{ scrollMarginTop: '100px' }}
    >
      <Heading size={'md'}>{'<Contact>'}</Heading>
    </Box>
  );
}
