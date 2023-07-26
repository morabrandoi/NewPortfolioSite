import { Text, Image, Flex } from '@chakra-ui/react';

interface ProjectItemProps {
  mediaURL: string;
  projectName: string;
  briefDescription: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [flexProps: string]: any;
}

export default function ProjectItem({
  mediaURL,
  projectName,
  briefDescription,
  ...flexProps
}: ProjectItemProps) {
  return (
    <Flex
      align={'flex-start'}
      justifyContent="left"
      direction="row"
      {...flexProps}
    >
      <Image
        borderRadius="10px"
        minWidth={'100px'}
        maxWidth="300px"
        objectFit={'contain'}
        src={mediaURL}
        alt="A picture or gif of the given project"
      />
      <Flex justifyContent={'flex-start'} direction={'column'} marginLeft={20}>
        <Text as="b">{projectName}</Text>
        <Text>{briefDescription}</Text>
      </Flex>
    </Flex>
  );
}
