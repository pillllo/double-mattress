import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReduxState } from "../types/ReduxState";
import NotificationSingle from "../atoms/NotificationSingle";
<<<<<<< HEAD
import NotificationConnection from "../atoms/NotificationConnection";
=======
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
export default function Notifications() {
  const notificationsArr = useSelector((state: ReduxState) => {
    return state.displayCategories.notifications;
  });

  const [notifs, setNotifs] = useState<any[]>([]);

  useEffect(() => {
<<<<<<< HEAD
    console.log(notificationsArr);
    const newNotifications = notificationsArr.map((notification) => {
      console.log(notification);
      return (
        <NotificationConnection
          key={notification.notificationId}
          notification={notification}
          notificationsArr={notificationsArr}
        />
=======

    const newNotifications = notificationsArr.map((notification) => {

      return (
        <NotificationSingle key={notification.id} notification={notification}/>
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      );
    });
    setNotifs(newNotifications);
  }, [notificationsArr]);

  return (
<<<<<<< HEAD
    <Flex
      py="5"
      align="center"
      justify="flex-start"
      direction="column"
      h="90vh"
      w="100vw"
      overflowY="auto"
    >
=======
    <Flex align="center" direction="column" h="75vh" w="90vw" overflowY="auto">
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
      {notifs}
    </Flex>
  );
}
