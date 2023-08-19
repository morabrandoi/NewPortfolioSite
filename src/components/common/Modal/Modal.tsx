// copied from Chakra ui example on their docs: https://chakra-ui.com/docs/overlay/modal

import {
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from '@chakra-ui/react';

type DetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  relevantSkills: string[];
  bulletPoints: string[];
};

export function DetailsModal({
  isOpen,
  onClose,
  modalTitle,
  relevantSkills,
  bulletPoints,
}: DetailsModalProps) {
  const bulletBody = (
    <UnorderedList>
      {bulletPoints.map((bulletPoint, ind) => (
        <ListItem key={ind}>{bulletPoint}</ListItem>
      ))}
    </UnorderedList>
  );

  // This should be the bullet points, a small gap, and then a string of relevant skills
  const body = (
    <>
      {bulletBody}
      <br />
      <br />
      <b>Relevant Skills:</b> {relevantSkills.join(', ')}
    </>
  );

  return (
    // I want to make the detail modal take 50% of the screen width
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent maxWidth={'50%'}>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
