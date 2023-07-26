import { Heading, Box, useColorModeValue, Flex } from '@chakra-ui/react';
import ProjectItem from '../common/ProjectItem';

export default function Projects() {
  return (
    <Box
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={8}
      id="Projects"
      sx={{ scrollMarginTop: '100px' }}
    >
      <Heading size={'lg'}>{'<Projects>'}</Heading>
      <Flex direction={'column'}>
        <ProjectItem
          mediaURL="https://media.tenor.com/qMZe3e1Er7EAAAAC/example.gif"
          projectName="Sample"
          briefDescription="Sample Desc"
          margin={10}
        />
        <ProjectItem
          mediaURL="https://media.tenor.com/qMZe3e1Er7EAAAAC/example.gif"
          projectName="Sample"
          briefDescription="Sample Desc"
          margin={10}
        />
      </Flex>
    </Box>
  );
}
