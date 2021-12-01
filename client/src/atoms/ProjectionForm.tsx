import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Textarea,
  useDisclosure,
  ModalCloseButton,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
interface TheProp {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function ProjectionForm({ onClose, onOpen, isOpen }: TheProp) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Projection Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Absolute</FormLabel>
            <Input type="text" size="md" variant="filled"></Input>
            <FormLabel>Monkey</FormLabel>
            <Input type="number" size="md" variant="filled"></Input>
            <FormLabel>Madness</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" color="gray.200" />
              <Input type="number"></Input>
            </InputGroup>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
