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
import { useState } from "react";
interface TheProp {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function ProjectionForm({ onClose, onOpen, isOpen }: TheProp) {
  const [newProjection, setNewProjection] = useState({ transactionType:"", amount:0,currency:"eur",category: "",date:"", description:"",includeAvg:false })


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
            <FormLabel>Category</FormLabel>
            <Input type="text" size="md" variant="filled"></Input>
            <FormLabel>Description</FormLabel>
            <Input type="text" size="md" variant="filled"></Input>
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftAddon children="$" color="white" />
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
