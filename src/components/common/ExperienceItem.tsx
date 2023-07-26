import * as React from 'react';
import { Text, VStack, Image } from '@chakra-ui/react';

interface ExperienceItemProps {
  imgUrl: string;
  companyName: string;
  year: string;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [vstackProps: string]: any;
}

export default function ExperienceItem({
  imgUrl,
  companyName,
  year,
  role,
  ...vstackProps
}: ExperienceItemProps) {
  return (
    <VStack {...vstackProps} justify={'center'}>
      <Image
        borderRadius="10px"
        boxSize="75px"
        objectFit={'contain'}
        src={imgUrl}
        alt="A picture of me, Brando Mora"
      />
      <Text align={'center'} as="b">
        {companyName}
      </Text>
      <Text align={'center'} as="i">
        {year}
      </Text>
      <Text align={'center'}>{role}</Text>
    </VStack>
  );
}
