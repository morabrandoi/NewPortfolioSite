// copied from Chakra ui example on their docs: https://chakra-ui.com/docs/overlay/modal

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

type DetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  modalBody: React.ReactNode;
};

export function DetailsModal({
  isOpen,
  onClose,
  modalTitle,
  modalBody,
}: DetailsModalProps) {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
