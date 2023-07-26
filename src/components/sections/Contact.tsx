import { Heading, Box, useColorModeValue } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={8}
      id="Contact"
      sx={{ scrollMarginTop: '100px' }}
    >
      <Heading size={'lg'}>{'<Contact>'}</Heading>
    </Box>
  );
}
