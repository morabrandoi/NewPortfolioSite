import * as React from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ExperienceItem from '../common/ExperienceItem';

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
        <ExperienceItem
          companyName="Meta"
          imgUrl="/imgs/metaLogo.png"
          role="Software Engineer"
          m={8}
        />
        <ExperienceItem
          companyName="Oculus"
          imgUrl="/imgs/oculusLogo.png"
          role="Software Engineer Intern"
          m={8}
        />
        <ExperienceItem
          companyName="Facebook"
          imgUrl="/imgs/fbLogo.png"
          role="FBU Software Engineer Intern"
          m={8}
        />
        <ExperienceItem
          companyName="University of Florida McIntyre Lab"
          imgUrl="/imgs/ufBioLogo.jpg"
          role="Undergradute Research Assistant"
          m={8}
        />
      </Flex>
    </Box>
  );
}
