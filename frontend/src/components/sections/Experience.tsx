import * as React from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

export default function Experience() {
  return (
    <Box
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={8}
      id="Experience"
      sx={{ scrollMarginTop: '100px' }}>
      <Heading size={'lg'}>{'<Experience>'}</Heading>
      <Flex flexWrap={'wrap'} justifyContent={'center'}>
        <Box bg="tomato" height="80px" width={100} margin={10}></Box>
        <Box bg="tomato" height="80px" width={100} margin={10}></Box>
        <Box bg="tomato" height="80px" width={100} margin={10}></Box>
        <Box bg="tomato" height="80px" width={100} margin={10}></Box>
        <Box bg="tomato" height="80px" width={100} margin={10}></Box>
      </Flex>
    </Box>
  );
}
