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
  ModalCloseButton,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ApiServices from "../ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
  const [partnerName, setPartnerName] = useState("Test");
  const [recieveUser, setRecieveUser] = useState(false);
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

  const submitSearch = () => {
    ApiServices.searchPartner({ userId: user, email: partnerEmail }).then(
      (data: any) => {
        console.log(data);

        setPartnerName(data.firstName);
      }
    );
    setRecieveUser(true);
  };
  const confirmUser = () => {
    console.log({ userId: user, email: partnerEmail });
    ApiServices.sendConnection({ userId: user, email: partnerEmail }).then(
      (data: any) => {
        console.log(data);
      }
    );
    setRecieveUser(false);
    setPartnerName("");
    setPartnerEmail("");
    notify();
  };

  const firstRequest = (
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
  );
  const secondRequest = (
    <FormControl margin="10px" justify="center">
      <FormLabel
        fontSize="18"
        fontWeight="600"
        letterSpacing="wide"
        textAlign="center"
      >
        Is this your partner?
      </FormLabel>
      <Text
        fontSize="18"
        fontWeight="600"
        letterSpacing="wide"
        textAlign="center"
        mb="1.5rem"
      >
        {partnerName}
      </Text>
      <Flex justify="space-evenly">
        <Button
          colorScheme="red"
          onClick={() => {
            setRecieveUser(false);
            setPartnerEmail("");
            onClose();
          }}
          fontSize={[12, 14, 16, 18]}
        >
          {"Cancel"}
        </Button>
        <Button
          colorScheme="green"
          onClick={() => {
            confirmUser();
            onClose();
          }}
          fontSize={[12, 14, 16, 18]}
        >
          {"Confirm"}
        </Button>
      </Flex>
    </FormControl>
  );

  return (
    <>
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
          <ModalHeader>Connect to a Partner</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{recieveUser ? secondRequest : firstRequest}</ModalBody>
          <ModalFooter>
            <Box>
              {recieveUser ? null : (
                <Button
                  onClick={() => {
                    submitSearch();
                  }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
