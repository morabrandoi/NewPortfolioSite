/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Contact() {
  const [subjectLine, setSubjectLine] = useState('Hey I saw your website!');
  const [emailBody, setEmailBody] = useState(
    'Please consider joining our team 🙏!'
  );
  return (
    <>
      <Heading size={'md'}>{'<Contact>'}</Heading>
      <FormControl>
        <FormLabel>Subject Line</FormLabel>
        <Input type="email" />
        <FormHelperText>asdasdasd</FormHelperText>
      </FormControl>
    </>
  );
}
