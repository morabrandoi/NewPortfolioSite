import { Text, VStack, Image, useDisclosure, Box } from '@chakra-ui/react';
import { DetailsModal } from './Modal/Modal';

interface ExperienceCardProps {
  imgUrl: string;
  companyName: string;
  dateRange: string;
  role: string;
  relevantSkills: string[];
  bulletPoints: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [vstackProps: string]: any;
}

export default function ExperienceCard({
  imgUrl,
  companyName,
  dateRange,
  role,
  relevantSkills,
  bulletPoints,
}: ExperienceCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="button"
        display={'flex'}
        transition="all 1s cubic-bezier(.08,.52,.52,1)"
        borderRadius="4px"
        width={'150px'}
        height={'250px'}
        padding={2}
        _hover={{
          // translate to the right
          transform: 'scale(1.15)',
        }}
        // _active={{
        //   bg: '#dddfe2',
        //   transform: 'scale(1.1)',
        // }}
        // _focus={{
        //   boxShadow:
        //     '0 0 1px 2px rgba(128, 128, 128, .45), 0 1px 1px rgba(0, 0, 0, .15)',
        // }}
      >
        <VStack onClick={onOpen}>
          <Image
            borderRadius="10px"
            boxSize="75px"
            objectFit={'contain'}
            src={imgUrl}
            alt="A picture of the company logo."
          />
          <Text align={'center'} as="b">
            {companyName}
          </Text>
          <Text align={'center'} as="i">
            {dateRange}
          </Text>
          <Text align={'center'}>{role}</Text>
        </VStack>
        <DetailsModal
          isOpen={isOpen}
          onClose={onClose}
          modalTitle={`${companyName} (${dateRange})`}
          bulletPoints={bulletPoints}
          relevantSkills={relevantSkills}
        />
      </Box>
    </>
  );
}
