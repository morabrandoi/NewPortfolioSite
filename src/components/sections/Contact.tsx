import { Heading } from '@chakra-ui/react';
import './styles.scss';
import Section from '../common/Section/Section';

export default function Contact() {
  return (
    <Section transitionMs={750} linkNameId={'Contact'}>
      <Heading size={'md'}>{'<Contact>'}</Heading>
    </Section>
  );
}
