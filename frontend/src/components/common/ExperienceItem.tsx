import * as React from 'react';
import { Text, VStack, Image } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ExperienceItemProps {
  imgUrl: string;
  companyName: string;
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [vstackProps: string]: any;
}

export default function ExperienceItem({
  imgUrl,
  companyName,
  role,
  ...vstackProps
}: ExperienceItemProps) {
  return (
    <VStack {...vstackProps}>
      <Image
        borderRadius="10px"
        boxSize="75px"
        objectFit={'contain'}
        src={imgUrl}
        alt="A picture of me, Brando Mora"
      />
      <Text>{companyName}</Text>
      <Text>{role}</Text>
    </VStack>
  );
}
