import { VStack } from '@chakra-ui/react';
import {
  INITIAL_SECTION_TRANSITION_DELAY_MS,
  INTER_SECTION_TRANSITION_STEP_MS,
  SECTIONS_INFOS,
} from './constants';
import Section from '../common/Section/Section';

export default function Body() {
  const sectionComponents = SECTIONS_INFOS.map((sectionInfo, index) => {
    const transitionMs =
      INITIAL_SECTION_TRANSITION_DELAY_MS +
      index * INTER_SECTION_TRANSITION_STEP_MS;
    const sectionContent = sectionInfo.component;

    return (
      <Section
        transitionMs={transitionMs}
        linkNameId={sectionInfo.title}
        key={sectionInfo.title}
      >
        {sectionContent}
      </Section>
    );
  });

  return (
    <VStack
      zIndex={10}
      marginLeft={'auto'}
      marginRight={'auto'}
      width={'calc(max(350px, 80vw))'}
    >
      {sectionComponents}
    </VStack>
  );
}
