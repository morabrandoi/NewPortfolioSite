import { Heading, Box, useColorModeValue, Flex } from '@chakra-ui/react';
import ProjectItem from '../common/ProjectItem';
import './styles.scss';

export default function Projects() {
  return (
    <Box
      className="section"
      zIndex={10}
      borderRadius={10}
      backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
      m={8}
      p={4}
      id="Projects"
      sx={{ scrollMarginTop: '100px' }}
    >
      <Heading size={'md'}>{'<Projects>'}</Heading>
      <Flex direction={'column'}>
        <ProjectItem
          mediaURL="https://media.tenor.com/qMZe3e1Er7EAAAAC/example.gif"
          projectName="Sample"
          briefDescription="Sample Desc"
          margin={8}
        />
        <ProjectItem
          mediaURL="https://media.tenor.com/qMZe3e1Er7EAAAAC/example.gif"
          projectName="Sample"
          briefDescription="Sample Desc"
          margin={8}
        />
      </Flex>
    </Box>
  );
}
