import { Flex, Heading } from '@chakra-ui/react';
import ExperienceCard from '../../common/ExperienceCard';
import { EXPERIENCES } from '../../../constants/config';

export default function Experience() {
  const experienceItems = EXPERIENCES.map((experience) => {
    return (
      <ExperienceCard
        companyName={experience.companyName}
        imgUrl={`/imgs/${experience.imgFileName}`}
        role={experience.role}
        dateRange={experience.dateRange}
        bulletPoints={experience.bulletPoints}
        relevantSkills={experience.relevantSkills}
        key={experience.companyName + experience.dateRange}
      />
    );
  });

  return (
    <>
      <Heading size={'md'}>{'<Experience>'}</Heading>
      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        rowGap={4}
        columnGap={16}
      >
        {experienceItems}
      </Flex>
    </>
  );
}
