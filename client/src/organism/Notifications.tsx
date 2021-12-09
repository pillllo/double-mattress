import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReduxState } from "../types/ReduxState";
import NotificationSingle from "../atoms/NotificationSingle";
import NotificationConnection from "../atoms/NotificationConnection";
export default function Notifications() {
  const notificationsArr = useSelector((state: ReduxState) => {
    return state.displayCategories.notifications;
  });

  const [notifs, setNotifs] = useState<any[]>([]);

  useEffect(() => {
    console.log(notificationsArr);
    const newNotifications = notificationsArr.map((notification) => {
      console.log(notification);
      return (
        <NotificationConnection
          key={notification.notificationId}
          notification={notification}
          notificationsArr={notificationsArr}
        />
      );
    });
    setNotifs(newNotifications);
  }, [notificationsArr]);

  return (
    <Flex
      py="5"
      align="center"
      justify="flex-start"
      direction="column"
      h="90vh"
      w="100vw"
      overflowY="auto"
    >
      {notifs}
    </Flex>
  );
}
