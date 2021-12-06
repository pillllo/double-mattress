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
  Checkbox,
  CheckboxGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ApiServices from "../ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReduxState } from "../types/ReduxState";
interface TheProp {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export default function connectUserForm({ onClose, onOpen, isOpen }: TheProp) {
  const user = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });

  const [partnerEmail, setPartnerEmail] = useState("");
  const dispatch = useDispatch();

  const notify = () => {
    toast.info("Invitation Sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setPartnerEmail(value);
  };

  const submitPetition = () => {
    // ApiServices.sendConnection({userId:user, email:partnerEmail}).then((data:any)=>{
    //   console.log(data);
    // dispatch({type:"GET_PROJECTION_DATA",payload:data})
    // })
    setPartnerEmail("");
    notify();
  };

  return (
    <>
      <ToastContainer />
      <Modal
        onClose={() => {
          setPartnerEmail(""), onClose();
        }}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Projection Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl margin="10px">
              <FormLabel>Partner Email</FormLabel>
              <Input
                onChange={handleEmailChange}
                value={partnerEmail}
                type="text"
                size="md"
                variant="filled"
              ></Input>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                submitPetition();
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
