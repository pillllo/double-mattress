import { Notification } from "../types/Notification";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalCloseButton,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ApiServices from "../ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";
type Props={
  notification:Notification
}
export default function NotificationConnection({ notification }:Props) {
  const dispatch= useDispatch();
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const confirmConnection = () => {
    ApiServices.sendConnection({userId, partnerId:notification.fromUserId}).then((data:any)=>{
      dispatch({ type: "GET_USER_DATA", payload: data })
    })
  };



  return (
    <FormControl margin="10px">

    <Text type="text" size="md" variant="filled">
      Do you want to connect with {notification.fromUserName}
    </Text>
    <Button
      colorScheme="red"
      onClick={() => {
      }}
      fontSize={[12, 14, 16, 18]}
    >
      {"Cancel"}
    </Button>
    <Button
      colorScheme="green"
      onClick={confirmConnection}
      fontSize={[12, 14, 16, 18]}
    >
      {"Confirm"}
    </Button>
  </FormControl>
  );
}
