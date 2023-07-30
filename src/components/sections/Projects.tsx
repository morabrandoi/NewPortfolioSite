import { Heading, Flex } from '@chakra-ui/react';
import ProjectItem from '../common/ProjectItem';
import './styles.scss';
import Section from '../common/Section/Section';

export default function Projects() {
  return (
    <Section transitionMs={600} linkNameId={'Projects'}>
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
    </Section>
  );
}
