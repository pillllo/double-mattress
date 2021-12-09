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
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ApiServices from "../ApiServices";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";
type Props = {
  notification: Notification;
  notificationsArr: Notification[];
};
export default function NotificationConnection({
  notification,
  notificationsArr,
}: Props) {
  const dispatch = useDispatch();
  const userId = useSelector((state: ReduxState) => {
    return state.displayCategories.userId;
  });
  const updNotif = () => {
    const newNotif = notificationsArr.filter((not) => {
      return not.notificationId !== notification.notificationId;
    });
    return newNotif;
  };
  const confirmConnection = () => {
    ApiServices.confirmConnection({
      userId,
      connectToUserId: notification.fromUserId,
    }).then(() => {
      dispatch({ type: "UPDATE_USER_ID", payload: userId });
      ApiServices.loginUser({ userId: notification.fromUserId }).then(
        (data: any) => {
          dispatch({
            type: "GET_PARTNER_ID",
            payload: notification.fromUserId,
          });
          dispatch({ type: "GET_PARTNER_DATA", payload: data[0] });
          dispatch({ type: "ADD_NOTIFICATION", payload: updNotif() });
        }
      );
    });
  };

  const rejectConnection = () => {
    dispatch({ type: "ADD_NOTIFICATION", payload: updNotif() });
  };

  return (
    <Flex w="75vw" justify="center" align="center" letterSpacing="wide">
      <FormControl
        margin="10px"
        bg="whiteAlpha.200"
        p="5"
        rounded="xl"
        shadow="md"
        mb="5"
      >
        <Text fontSize="18" fontWeight="600" textAlign="center">
          Do you want to connect with {notification.fromUserName}?
        </Text>
        <Divider pt="1rem" />
        <Flex justify="space-evenly" pt="1rem">
          <Button
            colorScheme="red"
            onClick={rejectConnection}
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
        </Flex>
      </FormControl>
    </Flex>
  );
}
