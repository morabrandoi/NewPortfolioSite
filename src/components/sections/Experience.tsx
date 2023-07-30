import { Flex, Heading } from '@chakra-ui/react';
import ExperienceItem from '../common/ExperienceItem';
import {
  CCANAL_LOGO_FILENAME,
  FB_LOGO_FILENAME,
  META_LOGO_FILENAME,
  OCULUS_LOGO_FILENAME,
  UF_BIO_LOGO_FILENAME,
} from '../../constants/fileNames';
import './styles.scss';

export default function Experience() {
  return (
    <>
      <Heading size={'md'}>{'<Experience>'}</Heading>
      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <ExperienceItem
          companyName="Facebook"
          imgUrl={`/imgs/${FB_LOGO_FILENAME}`}
          role="FBU Software Engineer Intern"
          year="2020"
          m={8}
          maxWidth={150}
        />
        <ExperienceItem
          companyName="UF Bio Lab"
          imgUrl={`/imgs/${UF_BIO_LOGO_FILENAME}`}
          role="Undergradute Research Assistant"
          year="2020 - 2021"
          m={8}
          maxWidth={150}
        />
        <ExperienceItem
          companyName="Oculus"
          imgUrl={`/imgs/${OCULUS_LOGO_FILENAME}`}
          role="Software Engineer Intern"
          year="2021"
          m={8}
          maxWidth={150}
        />

        <ExperienceItem
          companyName="Meta"
          imgUrl={`/imgs/${META_LOGO_FILENAME}`}
          role="Software Engineer"
          year="2022"
          m={8}
          maxWidth={150}
        />
        <ExperienceItem
          companyName="Commerce Canal (Startup)"
          imgUrl={`/imgs/${CCANAL_LOGO_FILENAME}`}
          role="Fullstack Software Engineer"
          year="2023"
          m={8}
          maxWidth={150}
        />
      </Flex>
    </>
  );
}
